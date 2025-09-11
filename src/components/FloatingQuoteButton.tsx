import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingQuoteButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isSpecificPage = [
    '/blog',
    '/guides',
    '/conseils',
    '/entretien',
  ].includes(location.pathname);

  const handleClick = () => {
    if (isSpecificPage) {
      navigate('/devis');
    } else {
      const element = document.getElementById('contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="fixed bottom-8 right-8 bg-elegant-gold text-deep-black px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center lg:hidden"
      onClick={handleClick}
      aria-label={t('floating_quote_button.aria_label')}
    >
      <span className="font-manrope text-sm font-semibold">{t('floating_quote_button.text')}</span>
    </button>
  );
};

export default FloatingQuoteButton;
