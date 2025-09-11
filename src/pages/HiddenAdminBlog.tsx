import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Quill from 'quill'; // Import Quill
import { ArrowLeft } from 'lucide-react'; // Re-import ArrowLeft

const Font = Quill.import('formats/font'); // Import Font module from Quill

const HiddenAdminBlog = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill>(null); // Ref for Quill editor instance

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''; // Fallback to empty string for relative paths
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState(''); // New state for blog content
  const [customColor, setCustomColor] = useState('#000000'); // New state for custom color picker

  const categories = [
    { value: 'trends', label: t('blog_page.categories.trends') },
    { value: 'advice', label: t('blog_page.categories.advice') },
    { value: 'projects', label: t('blog_page.categories.projects') },
    { value: 'technical', label: t('blog_page.categories.technical') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nouveau post de blog à importer:', {
      category,
      title,
      subtitle,
      author,
      image: image ? image.name : null,
      content, // Include content in submission
    });

    // Placeholder for actual API call to import the blog post
    try {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('title', title);
      formData.append('subtitle', subtitle);
      formData.append('author', author);
      formData.append('content', content);
      if (image) {
        formData.append('image', image);
      }
      const response = await fetch(`${API_BASE_URL}/api/blog-import`, { // Assurez-vous que cette URL correspond à votre backend
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Blog post imported successfully!'); // Message de succès
        // Clear form fields after successful submission
        setCategory('');
        setTitle('');
        setSubtitle('');
        setAuthor('');
        setImage(null);
        setContent('');
      } else {
        const errorData = await response.json();
        alert(`Failed to import blog post: ${errorData.message || response.statusText}`); // Message d'erreur
        console.error('Failed to import blog post', errorData);
      }
    } catch (error: any) {
      alert(`Error importing blog post: ${error.message}`); // Message d'erreur réseau
      console.error('Error importing blog post:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear isAuthenticated
    localStorage.removeItem('loginTime');      // Clear loginTime
    navigate('/admin/login', { replace: true }); // Redirect to admin login
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();

      const handleSelectionChange = () => {
        const range = editor.getSelection();
        if (range) {
          if (range.length === 0) {
            // If cursor is at a position, get format at that position
            const format = editor.getFormat(range.index);
            setCustomColor(format.color || '#000000'); // Default to black if no color
          } else {
            // If text is selected, get format of the selection
            const format = editor.getFormat(range.index, range.length);
            setCustomColor(format.color || '#000000'); // Default to black if no color
          }
        } else {
          setCustomColor('#000000'); // Reset to black if no selection
        }
      };

      editor.on('selection-change', handleSelectionChange);

      // Cleanup on component unmount
      return () => {
        editor.off('selection-change', handleSelectionChange);
      };
    }
  }, []);

  // Custom Color Picker Handler
  const handleColorChange = (value: string) => {
    setCustomColor(value); // Update local state immediately
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection();
      if (range) {
        // Apply color to the current selection or at the cursor position
        editor.formatText(range.index, range.length || 0, 'color', value);
      } else {
        // If no selection, apply to future text (not ideal for simple color input, but good fallback)
        editor.format('color', value);
      }
    }
  };

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        [{ 'align': [] }],
        // Custom color picker button
        [{ 'color': [] }, { 'background': [] }],
        ['clean']
      ],
      handlers: {
        // No custom handlers needed for default color pickers, they work out of the box
      },
    },
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align',
    'color', 'background',
  ];

  return (
    <div className="font-manrope">
      <main className="pt-20 min-h-screen bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8 flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-anthracite hover:text-elegant-gold transition-colors font-manrope"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('hidden_admin_blog.back')}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              {t('admin_login.logout_button')}
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="font-unbounded text-4xl font-bold text-deep-black mb-8">
              {t('hidden_admin_blog.title_part1')} <span className="text-elegant-gold">{t('hidden_admin_blog.title_part2')}</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selection */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hidden_admin_blog.category_label')}
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-elegant-gold focus:border-elegant-gold sm:text-sm rounded-md shadow-sm"
                  required
                >
                  <option value="">{t('hidden_admin_blog.select_category_placeholder')}</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hidden_admin_blog.title_label')}
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 focus:ring-elegant-gold focus:border-elegant-gold"
                  placeholder={t('hidden_admin_blog.title_placeholder')}
                  required
                />
              </div>

              {/* Subtitle */}
              <div>
                <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hidden_admin_blog.subtitle_label')}
                </label>
                <input
                  type="text"
                  id="subtitle"
                  name="subtitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 focus:ring-elegant-gold focus:border-elegant-gold"
                  placeholder={t('hidden_admin_blog.subtitle_placeholder')}
                  required
                />
              </div>

              {/* Author */}
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hidden_admin_blog.author_label')}
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 focus:ring-elegant-gold focus:border-elegant-gold"
                  placeholder={t('hidden_admin_blog.author_placeholder')}
                  required
                />
              </div>

              {/* Blog Content Editor */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hidden_admin_blog.content_label')}
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {/* All manual formatting buttons are removed as ReactQuill handles them */}
                </div>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={handleContentChange}
                  modules={modules}
                  formats={formats}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 min-h-[200px] bg-white focus:ring-elegant-gold focus:border-elegant-gold overflow-y-auto text-left"
                  placeholder={t('hidden_admin_blog.content_placeholder')}
                  ref={quillRef} // Attach the ref to the ReactQuill component
                />
              </div>

              {/* Custom Color Input for more precise selection */}
              <div className="mt-4">
                <label htmlFor="custom-color" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hidden_admin_blog.custom_color_label')}
                </label>
                <input
                  type="color"
                  id="custom-color"
                  value={customColor} // Bind value to state
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="w-12 h-12 border-0 cursor-pointer"
                  title={t('hidden_admin_blog.select_custom_color')}
                />
              </div>

              {/* Image Upload */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('hidden_admin_blog.image_upload_label')}
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-elegant-gold file:text-deep-black
                    hover:file:bg-elegant-gold/80"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-deep-black bg-elegant-gold hover:bg-elegant-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-elegant-gold transition-colors duration-300"
                >
                  {t('hidden_admin_blog.submit_button')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HiddenAdminBlog;
