import { useState, useEffect } from 'react';
import { Menu, X, Book, Compass, Lightbulb, Wrench } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRessourcesMenuOpen, setIsRessourcesMenuOpen] = useState(false);
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

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setIsRessourcesMenuOpen(false);
  };

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
                className={`transition-all duration-300 ${isHomePage ? 'h-16' : 'h-10'} w-auto`}
              />
              <h1 className="font-unbounded text-2xl font-light text-white tracking-wide">
                PRESTIGE <span className="text-elegant-gold">EPOXY</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection('about')}
              className="font-manrope text-white hover:text-elegant-gold transition-all duration-300 relative group py-2"
            >
              {t('header.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="font-manrope text-white hover:text-elegant-gold transition-all duration-300 relative group py-2"
            >
              {t('header.services')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="font-manrope text-white hover:text-elegant-gold transition-all duration-300 relative group py-2"
            >
              {t('header.realizations')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="font-manrope text-white hover:text-elegant-gold transition-all duration-300 relative group py-2"
            >
              {t('header.faq')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-manrope text-white hover:text-elegant-gold transition-all duration-300 relative group py-2"
            >
              {t('header.contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div className="relative">
              <button
                onClick={() => setIsRessourcesMenuOpen(!isRessourcesMenuOpen)}
                className="font-manrope text-white hover:text-elegant-gold transition-all duration-300 relative group py-2 flex items-center gap-1"
              >
                {t('header.resources')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold transition-all duration-300 group-hover:w-full"></span>
                <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isRessourcesMenuOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isRessourcesMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-deep-black shadow-lg rounded-md overflow-hidden border border-elegant-gold/20">
                  <Link to="/blog" onClick={() => {
                    setIsRessourcesMenuOpen(false);
                    setIsMenuOpen(false);
                  }} className="block px-4 py-2 text-sm text-white hover:bg-elegant-gold/20 hover:text-elegant-gold transition-colors duration-200">
                    <Book size={16} className="inline mr-2" />{t('header.blog')}
                  </Link>
                  <Link to="/guides" onClick={() => {
                    setIsRessourcesMenuOpen(false);
                    setIsMenuOpen(false);
                  }} className="block px-4 py-2 text-sm text-white hover:bg-elegant-gold/20 hover:text-elegant-gold transition-colors duration-200">
                    <Compass size={16} className="inline mr-2" />{t('header.guides')}
                  </Link>
                  <Link to="/conseils" onClick={() => {
                    setIsRessourcesMenuOpen(false);
                    setIsMenuOpen(false);
                  }} className="block px-4 py-2 text-sm text-white hover:bg-elegant-gold/20 hover:text-elegant-gold transition-colors duration-200">
                    <Lightbulb size={16} className="inline mr-2" />{t('header.advice')}
                  </Link>
                  <Link to="/entretien" onClick={() => {
                    setIsRessourcesMenuOpen(false);
                    setIsMenuOpen(false);
                  }} className="block px-4 py-2 text-sm text-white hover:bg-elegant-gold/20 hover:text-elegant-gold transition-colors duration-200">
                    <Wrench size={16} className="inline mr-2" />{t('header.maintenance')}
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* CTA & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-elegant-gold to-luxury-gold text-deep-black px-8 py-3 rounded-full font-manrope font-semibold hover:shadow-gold transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-elegant-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">{t('header.free_quote')}</span>
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
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-white hover:text-elegant-gold transition-colors font-manrope">{t('header.about')}</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-white hover:text-elegant-gold transition-colors font-manrope">{t('header.services')}</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-white hover:text-elegant-gold transition-colors font-manrope">{t('header.realizations')}</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-white hover:text-elegant-gold transition-colors font-manrope">{t('header.faq')}</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-white hover:text-elegant-gold transition-colors font-manrope">{t('header.contact')}</button>
              <div className="relative">
                <button
                  onClick={() => setIsRessourcesMenuOpen(!isRessourcesMenuOpen)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-elegant-gold transition-colors font-manrope flex items-center justify-between"
                >
                  <span>{t('header.resources')}</span>
                  <svg className={`w-4 h-4 transform transition-transform duration-300 ${isRessourcesMenuOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isRessourcesMenuOpen && (
                  <div className="pl-6 pr-3 py-1 space-y-1 bg-deep-black/70 border-l border-elegant-gold/20">
                    <Link to="/blog" onClick={() => {
                      setIsRessourcesMenuOpen(false);
                      setIsMenuOpen(false);
                    }} className="block px-4 py-2 text-sm text-white hover:bg-elegant-gold/20 hover:text-elegant-gold transition-colors duration-200">
                      <Book size={16} className="inline mr-2" />{t('header.blog')}
                    </Link>
                    <Link to="/guides" onClick={() => {
                      setIsRessourcesMenuOpen(false);
                      setIsMenuOpen(false);
                    }} className="block px-4 py-2 text-sm text-white hover:bg-elegant-gold/20 hover:text-elegant-gold transition-colors duration-200">
                      <Compass size={16} className="inline mr-2" />{t('header.guides')}
                    </Link>
                    <Link to="/conseils" onClick={() => {
                      setIsRessourcesMenuOpen(false);
                      setIsMenuOpen(false);
                    }} className="block px-4 py-2 text-sm text-white hover:bg-elegant-gold/20 hover:text-elegant-gold transition-colors duration-200">
                      <Lightbulb size={16} className="inline mr-2" />{t('header.advice')}
                    </Link>
                    <Link to="/entretien" onClick={() => {
                      setIsRessourcesMenuOpen(false);
                      setIsMenuOpen(false);
                    }} className="block px-4 py-2 text-sm text-white hover:bg-elegant-gold/20 hover:text-elegant-gold transition-colors duration-200">
                      <Wrench size={16} className="inline mr-2" />{t('header.maintenance')}
                    </Link>
                  </div>
                )}
              </div>
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
                <button onClick={() => scrollToSection('contact')} className="w-full bg-elegant-gold text-deep-black px-6 py-3 rounded-full font-manrope font-semibold hover:bg-elegant-gold/90 transition-colors">
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

export default Header;
