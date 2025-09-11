import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
    // Optionally, you might want to disable certain functionalities here
    // For example, if you use analytics cookies, you would disable them.
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-deep-black text-white p-6 shadow-lg z-50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 animate-slide-up">
      <p className="text-base text-center md:text-left flex-grow">
        {t('cookie_consent.message')}{' '}
        <a href="/mentions-legales" onClick={() => navigate('/mentions-legales')} className="text-elegant-gold hover:underline font-medium cursor-pointer">
          {t('cookie_consent.learn_more')}
        </a>
      </p>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 w-full md:w-auto">
        <button
          onClick={handleAccept}
          className="bg-elegant-gold text-deep-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-elegant-gold/90 transition-colors duration-300 w-full md:w-auto"
        >
          {t('cookie_consent.accept_button')}
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-700 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-600 transition-colors duration-300 w-full md:w-auto"
        >
          {t('cookie_consent.decline_button')}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
