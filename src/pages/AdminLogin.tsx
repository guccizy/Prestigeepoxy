import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME || 'admin';
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'password';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginTime', Date.now().toString()); // Store current timestamp
      navigate('/admin/blog-import');
    } else {
      setError(t('admin_login.invalid_credentials'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-black text-white p-4">
      <div className="bg-darker-gray p-8 rounded-lg shadow-lg w-full max-w-md border border-elegant-gold/20">
        <h2 className="text-3xl font-unbounded font-light text-elegant-gold mb-6 text-center">
          {t('admin_login.title')}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-manrope text-cream mb-2">
              {t('admin_login.username_label')}
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-anthracite border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-gold focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-manrope text-cream mb-2">
              {t('admin_login.password_label')}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-anthracite border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-gold focus:border-transparent"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full bg-elegant-gold text-deep-black py-2 rounded-md font-semibold hover:bg-elegant-gold/90 transition-colors duration-300"
            >
              {t('admin_login.login_button')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
