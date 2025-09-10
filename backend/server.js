require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db'); // Our database connection
const nodemailer = require('nodemailer'); // Import nodemailer
const generateConfirmationEmail = require('./emailTemplates/confirmationEmail'); // Import client email template
const generateInternalQuoteEmail = require('./emailTemplates/internalQuoteEmail'); // Import internal quote email template
const generateInternalContactEmail = require('./emailTemplates/internalContactEmail'); // Import internal contact email template
const multer = require('multer'); // For handling file uploads
const path = require('path'); // For path manipulation

const app = express();
const PORT = process.env.PORT || 5000;

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // false for TLS/STARTTLS
  requireTLS: true, // Requis pour STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images/blog')); // Ensure this directory exists relative to project root
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use('/images', express.static(path.join(__dirname, '../public/images'))); // Serve static images

// Basic test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Route for submitting quote requests
app.post('/api/quote', async (req, res) => {
  const { name, email, phone, project, message, squareFootage, finishType } = req.body;

  if (!name || !email || !project || !message || !squareFootage || !finishType) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  try {
    // 1. Save to database
    const [result] = await db.execute(
      'INSERT INTO quote_requests (name, email, phone, project, square_footage, finish_type, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, email, phone, project, squareFootage, finishType, message]
    );

    console.log('Attempting to send internal quote email...');
    // 2. Send internal email to contact@prestigeepoxy.ca using the new template
    const internalMailOptions = {
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_TO,   
      subject: 'Nouvelle demande de devis Prestige Epoxy',
      html: generateInternalQuoteEmail(name, email, phone, project, message, squareFootage, finishType),
    };

    await transporter.sendMail(internalMailOptions);
    console.log('Internal email sent successfully to:', process.env.EMAIL_TO);

    console.log('Attempting to send client confirmation email...');
    // 3. Send confirmation email to client
    const clientMailOptions = {
      from: process.env.EMAIL_USER, // Utiliser la même adresse que celle pour l'authentification
      to: email,                     // Send to the client's email address
      subject: 'Confirmation de votre demande de devis - Prestige Epoxy',
      html: generateConfirmationEmail(name, email, project, message, squareFootage, finishType),
      replyTo: process.env.NOREPLY_EMAIL, // Les réponses iront à cette adresse
    };

    await transporter.sendMail(clientMailOptions);
    console.log('Confirmation email sent successfully to:', email);

    res.status(201).json({ message: 'Votre demande de devis a été soumise avec succès et les emails de confirmation ont été envoyés !' });
  } catch (error) {
    console.error('Error submitting quote request or sending email:', error);
    res.status(500).json({ message: 'Error submitting quote request or sending email.' });
  }
});

// Route for submitting general contact messages
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, project, squareFootage, finishType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_TO,   
      subject: 'Nouveau message de contact Prestige Epoxy',
      html: generateInternalContactEmail(name, email, phone, project, squareFootage, finishType, message),
    };

    console.log('Attempting to send contact email...');
    await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully to:', process.env.EMAIL_TO);

    res.status(200).json({ message: 'Votre message a été envoyé avec succès !', success: true });
  } catch (error) {
    console.error('Error sending contact message email:', error);
    res.status(500).json({ message: 'Error sending contact message.', success: false });
  }
});

// Routes for blog posts
app.get('/api/blog', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT id, category, title, subtitle, author, image_url, created_at FROM blog_posts ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ message: 'Failed to fetch blog posts', error: error.message });
  }
});

app.get('/api/blog/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.execute('SELECT id, category, title, subtitle, author, content, image_url, created_at FROM blog_posts WHERE id = ?', [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'Blog post not found.' });
    }
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    res.status(500).json({ message: 'Failed to fetch blog post', error: error.message });
  }
});

// Route for submitting new blog posts
app.post('/api/blog-import', (req, res, next) => {
  upload.single('image')(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.error('Multer error:', err);
      return res.status(400).json({ message: err.message, code: err.code });
    } else if (err) {
      // An unknown error occurred when uploading.
      console.error('Unknown upload error:', err);
      return res.status(500).json({ message: 'An unknown error occurred during file upload.', error: err.message });
    }
    // Everything went fine so far, proceed to the next middleware (our actual route logic)
    next();
  });
}, async (req, res) => {
  const { category, title, subtitle, author, content } = req.body;
  const imageUrl = req.file ? `/images/blog/${req.file.filename}` : null;

  if (!category || !title || !author || !content) {
    return res.status(400).json({ message: 'Please fill in all required text fields.' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO blog_posts(category, title, subtitle, author, content, image_url, created_at) VALUES(?, ?, ?, ?, ?, ?, NOW())',
      [category, title, subtitle, author, content, imageUrl]
    );

    if (result && result.affectedRows > 0) { // Vérifiez si l'insertion a eu lieu
      console.log('Blog post data received and processed:', { category, title, subtitle, author, content, imageUrl });
      res.status(200).json({ message: 'Blog post imported successfully!', id: result.insertId }); // Retournez l'ID inséré si disponible
    } else {
      console.error('Database insertion failed for blog post, no rows affected.', { category, title, author });
      res.status(500).json({ message: 'Failed to import blog post: Database insertion issue.' });
    }
  } catch (error) {
    console.error('Error importing blog post during DB operation:', error);
    res.status(500).json({ message: 'Failed to import blog post', error: error.message });
  }
});

// Middleware de gestion d'erreurs général
app.use((err, req, res, next) => {
  console.error('Global error handler caught an error:', err.stack); // Log complet de l'erreur
  res.status(err.statusCode || 500).json({
    message: err.message || 'An unexpected error occurred.',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
