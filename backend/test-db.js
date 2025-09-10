import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('✅ Connection successful!');
    await connection.end();
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
})();
