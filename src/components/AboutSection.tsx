import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section id="about-section" className="py-20 bg-deep-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image Section */}
          <div 
            className="relative mb-10 lg:mb-0 rounded-2xl shadow-lg overflow-hidden pb-[56.25%]"
          >
            <img
              src="/images/artisan_solbrut.png"
              alt={t('about_section.image_alt_1')}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[5000ms] ${showFirstImage ? 'opacity-100' : 'opacity-0'}`}
            />
            <img
              src="/images/artisan.jpg"
              alt={t('about_section.image_alt_2')}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[5000ms] ${showFirstImage ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="font-unbounded text-3xl md:text-4xl font-light text-elegant-gold mb-6">
              {t('about_section.title_main')}
            </h2>
            <p className="font-manrope text-lg text-white/80 leading-relaxed mb-4">
              {t('about_section.text_block_1')}
            </p>
            <p className="font-manrope text-lg text-white/80 leading-relaxed">
              {t('about_section.text_block_2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
