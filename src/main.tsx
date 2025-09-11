import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n.ts'; // Import i18n configuration
import Quill from 'quill'; // Import Quill

const Font = Quill.import('formats/font');
// Add fonts you want to use (ensure these are loaded in index.html)
Font.whitelist = ['Roboto', 'Open Sans', 'Lato', 'Montserrat', 'sans-serif']; // Add 'sans-serif' as a fallback
Quill.register(Font, true);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
