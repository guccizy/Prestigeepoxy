import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SubHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState(i18n.language); // Initialize with i18n's current language

  const toggleLanguage = () => {
    const newLocale = locale === "fr" ? "en" : "fr";
    setLocale(newLocale);
    i18n.changeLanguage(newLocale);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add this useEffect to synchronize locale with i18n.language changes
  useEffect(() => {
    setLocale(i18n.language);
  }, [i18n.language]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const links = [
    { name: t('header.home'), to: '/' },
    { name: t('header.blog'), to: '/blog' },
    { name: t('header.guides'), to: '/guides' },
    { name: t('header.advice'), to: '/conseils' },
    { name: t('header.maintenance'), to: '/entretien' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-deep-black/95 backdrop-blur-xl shadow-luxury border-b border-elegant-gold/30'
        : 'bg-gradient-to-b from-deep-black/80 via-deep-black/60 to-transparent backdrop-blur-sm border-b border-elegant-gold/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elegant-gold/50 to-transparent"></div>
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-0" reloadDocument>
              <img
                src="/logo/logo.png"
                alt="Prestige Epoxy Logo"
                className="h-10 w-auto"
              />
              <h1 className="font-unbounded text-2xl font-light text-white tracking-wide">
                PRESTIGE <span className="text-elegant-gold">EPOXY</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="font-manrope text-white hover:text-elegant-gold transition-all duration-300 relative group py-2"
                reloadDocument
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => { window.location.href = '/devis'; }}
              className="bg-gradient-to-r from-elegant-gold to-luxury-gold text-deep-black px-8 py-3 rounded-full font-manrope font-semibold hover:shadow-gold transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-elegant-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">
              {t('header.free_quote')}
              </span>
            </button>
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="relative w-16 h-8 rounded-full bg-darker-gray cursor-pointer transition-colors duration-300 focus:outline-none flex items-center px-1 shadow-inner"
              >
                {/* Inactive language text - always visible as white, positioned opposite the thumb */}
                {locale === "fr" && (
                  <span className="text-sm font-semibold text-white absolute right-2">EN</span>
                )}
                {locale === "en" && (
                  <span className="text-sm font-semibold text-white absolute left-2">FR</span>
                )}

                {/* Moving thumb with active language text */}
                <div
                  className={`absolute top-1 w-6 h-6 rounded-full shadow-md transition-transform duration-300 bg-elegant-gold flex items-center justify-center
                    ${locale === "en" ? 'translate-x-8' : 'translate-x-0'}`}
                  style={{ left: '4px' }}
                >
                  <span className="text-sm font-semibold text-deep-black">
                    {locale.toUpperCase()}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-elegant-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-deep-black/95 backdrop-blur-sm border-t border-elegant-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="block w-full text-left px-3 py-2 text-white hover:text-elegant-gold transition-colors font-manrope"
                  onClick={() => setIsMenuOpen(false)}
                  reloadDocument
                >
                  {link.name}
                </Link>
              ))}
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2 flex items-center justify-center">
                <button
                  onClick={toggleLanguage}
                  className="relative w-20 h-10 rounded-full bg-darker-gray cursor-pointer transition-colors duration-300 focus:outline-none flex items-center px-1 shadow-inner"
                >
                  {/* Inactive language text - always visible as white, positioned opposite the thumb */}
                  {locale === "fr" && (
                    <span className="text-base font-semibold text-white absolute right-2">EN</span>
                  )}
                  {locale === "en" && (
                    <span className="text-base font-semibold text-white absolute left-2">FR</span>
                  )}

                  {/* Moving thumb with active language text */}
                  <div
                    className={`absolute top-1 w-8 h-8 rounded-full shadow-md transition-transform duration-300 bg-elegant-gold flex items-center justify-center
                      ${locale === "en" ? 'translate-x-10' : 'translate-x-0'}`}
                    style={{ left: '4px' }}
                  >
                    <span className="text-base font-semibold text-deep-black">
                      {locale.toUpperCase()}
                    </span>
                  </div>
                </button>
              </div>
              <div className="px-3 py-2">
                <button
                  onClick={() => { window.location.href = '/devis'; }}
                  className="w-full bg-elegant-gold text-deep-black px-6 py-3 rounded-full font-manrope font-semibold hover:bg-elegant-gold/90 transition-colors"
                >
                  {t('header.free_quote')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default SubHeader;
