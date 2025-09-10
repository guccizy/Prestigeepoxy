import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { t } = useTranslation(); // Initialize useTranslation

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: t('services_section.residential.title'),
      subtitle: t('services_section.residential.subtitle'),
      description: t('services_section.residential.description'),
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      // Supprimer cette ligne si vous ne voulez plus de CTA:
      // cta: t('services_section.residential.cta') 
    },
    {
      title: t('services_section.commercial.title'),
      subtitle: t('services_section.commercial.subtitle'),
      description: t('services_section.commercial.description'),
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
      // Supprimer cette ligne si vous ne voulez plus de CTA:
      // cta: t('services_section.commercial.cta') 
    }
  ];

  return (
    <section id="services" className="py-0 bg-deep-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {services.map((service, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer overflow-hidden min-h-[60vh] lg:min-h-screen"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-deep-black/60 group-hover:bg-deep-black/50 transition-all duration-500"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 lg:p-12">
              {/* Top Content */}
              <div>
                <div className="text-elegant-gold/80 font-manrope text-xs sm:text-sm tracking-widest mb-3 md:mb-4 opacity-90">
                  {service.subtitle}
                </div>
              </div>

              {/* Bottom Content */}
              <div>
                <h3 className="font-unbounded text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  {service.title}
                </h3>
                
                <p className="font-manrope text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-md">
                  {service.description}
                </p>

                {/* CTA (Call To Action) - Suppression de ce bloc */}
                {/* {service.cta && (
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="group/btn inline-flex items-center gap-3 text-elegant-gold hover:text-white transition-all duration-300"
                  >
                    <span className="font-manrope font-semibold text-sm sm:text-base md:text-lg tracking-wide">
                      {service.cta}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-elegant-gold group-hover/btn:w-full transition-all duration-500"></div>
                  </button>
                )} */}
              </div>
            </div>

            {/* Hover Effect Line */}
            <div className={`absolute top-0 left-0 w-1 h-full bg-elegant-gold transform origin-top transition-all duration-500 ${
              hoveredCard === index ? 'scale-y-100' : 'scale-y-0'
            }`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;