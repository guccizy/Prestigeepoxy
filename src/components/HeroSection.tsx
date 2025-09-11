import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [parallaxStrength, setParallaxStrength] = useState(0.5);
  const { t } = useTranslation();

  const words = [
    t('hero_section.dynamic_words.elegance'), 
    t('hero_section.dynamic_words.durability'), 
    t('hero_section.dynamic_words.prestige'), 
    t('hero_section.dynamic_words.innovation')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // md breakpoint in Tailwind CSS
        setParallaxStrength(0);
      } else {
        setParallaxStrength(0.5);
      }
    };
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black">
      {/* Background Image */}
      <div className="absolute inset-0 h-screen md:h-full">
        <img 
          src="/images/hero.png"
          alt={t('hero_section.image_alt')}
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * parallaxStrength}px)` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-deep-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Main title */}
        <div className="mb-12">
          <h1 className="font-unbounded text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[0.9] tracking-tight mb-6 md:mb-8">
            {t('hero_section.title_part1')}
            <br />
            <span className="relative inline-block mt-4">
              <span className="text-elegant-gold">
                {words[currentWord]}
              </span>
              <span className="text-white ml-4">{t('hero_section.title_part2')}</span>
            </span>
          </h1>
        </div>
        
        {/* Refined description */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-16 px-4">
          <p className="font-manrope text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed font-light text-center">
            {t('hero_section.description_line1')}
            <br />
            {t('hero_section.description_line2')}
          </p>
        </div>

        {/* Elegant CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-16 md:mb-20 px-4">
          
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="group bg-transparent border border-white/30 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-manrope font-semibold text-base md:text-lg hover:border-white/50 hover:bg-white/5 transition-all duration-500 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            {t('hero_section.cta_button_2')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('services')}>
          <ChevronDown className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300 animate-bounce" />
          <span className="font-manrope text-xs text-white/60 group-hover:text-white transition-colors duration-300 tracking-wider">
            {t('hero_section.scroll_indicator')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;