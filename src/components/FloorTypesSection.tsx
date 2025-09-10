import { useState, useEffect } from 'react';
import { Home, Building2, Factory, Palette, Paintbrush, Diamond, Tornado, BrickWall, Star, Image, Square, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FloorTypesSection = () => {
  const [activeType, setActiveType] = useState('residentiel');
  const { t } = useTranslation();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && floorTypes.some(type => type.id === hash)) {
        setActiveType(hash);
      }
    };

    handleHashChange(); // Run once on mount
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const floorTypes = [
    {
      id: 'residentiel',
      title: t('floor_types_section.residential.title'),
      icon: Home,
      subtitle: t('floor_types_section.residential.subtitle'),
      description: t('floor_types_section.residential.description'),
      features: [
        t('floor_types_section.residential.features.kitchen'), 
        t('floor_types_section.residential.features.living_room'), 
        t('floor_types_section.residential.features.garage'), 
        t('floor_types_section.residential.features.bathroom')
      ],
      image: '/images/luxehouse.jpg'
    },
    {
      id: 'commercial',
      title: t('floor_types_section.commercial.title'),
      icon: Building2,
      subtitle: t('floor_types_section.commercial.subtitle'),
      description: t('floor_types_section.commercial.description'),
      features: [
        t('floor_types_section.commercial.features.dealership'), 
        t('floor_types_section.commercial.features.bar_restaurant'), 
        t('floor_types_section.commercial.features.corporate_office'), 
        t('floor_types_section.commercial.features.boutique')
      ],
      image: '/images/commerceluxe.jpg'
    },
    {
      id: 'industriel',
      title: t('floor_types_section.industrial.title'),
      icon: Factory,
      subtitle: t('floor_types_section.industrial.subtitle'),
      description: t('floor_types_section.industrial.description'),
      features: [
        t('floor_types_section.industrial.features.warehouse'), 
        t('floor_types_section.industrial.features.mechanical_garage'), 
        t('floor_types_section.industrial.features.laboratory'), 
        t('floor_types_section.industrial.features.factory')
      ],
      image: '/images/industriel.jpg'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="floor-types" className="py-20 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-unbounded text-3xl md:text-5xl font-light text-white mb-4">
            {t('floor_types_section.main_title')}
          </h2>
          <p className="font-manrope text-lg text-white/60 max-w-2xl mx-auto">
            {t('floor_types_section.main_subtitle')}
          </p>
        </div>

        {/* Types de sols - Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex gap-8 md:gap-12 min-w-max px-4">
            {floorTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`group flex flex-col items-center gap-3 transition-all duration-300 ${
                  activeType === type.id ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  activeType === type.id 
                    ? 'bg-elegant-gold text-deep-black' 
                    : 'bg-white/5 text-white/60 group-hover:bg-white/10'
                }`}>
                  <type.icon className="w-8 h-8" />
                </div>
                <span className="font-manrope text-sm font-medium whitespace-nowrap">
                  {type.title}
                </span>
                {activeType === type.id && (
                  <div className="w-8 h-0.5 bg-elegant-gold"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu actif */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src={floorTypes.find(type => type.id === activeType)?.image}
                alt={floorTypes.find(type => type.id === activeType)?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            <div>
              <div className="text-elegant-gold/80 font-manrope text-sm tracking-widest mb-2">
                {floorTypes.find(type => type.id === activeType)?.subtitle}
              </div>
              <h3 className="font-unbounded text-3xl md:text-4xl font-light text-white mb-4">
                {floorTypes.find(type => type.id === activeType)?.title}
              </h3>
              <p className="font-manrope text-lg text-white/70 leading-relaxed">
                {floorTypes.find(type => type.id === activeType)?.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {floorTypes.find(type => type.id === activeType)?.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-elegant-gold rounded-full"></div>
                  <span className="font-manrope text-white/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-elegant-gold text-deep-black px-8 py-3 rounded-full font-manrope font-semibold hover:bg-elegant-gold/90 transition-all duration-300"
            >
              {t('floor_types_section.discover_achievements_button')}
            </button>
          </div>
        </div>

        {/* Types de finitions */}
        <div id="finitions-types" className="border-t border-white/10 pt-20">
          <div className="text-center mb-12">
            <h3 className="font-unbounded text-2xl md:text-3xl font-light text-white mb-4">
              {t('floor_types_section.finishes_title')}
            </h3>
            <p className="font-manrope text-white/60 mb-10">
              {t('floor_types_section.finishes_subtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-elegant-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-elegant-gold/20 transition-all duration-300">
                  <Paintbrush className="w-8 h-8 text-elegant-gold" />
                </div>
                <h4 className="font-unbounded text-xl font-light text-white mb-3 group-hover:text-elegant-gold transition-colors text-left">{t('floor_types_section.finishes.solid_colors.title')}</h4>
                <p className="font-manrope text-white/70 leading-relaxed text-left">{t('floor_types_section.finishes.solid_colors.description')}</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-elegant-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-elegant-gold/20 transition-all duration-300">
                  <Diamond className="w-8 h-8 text-elegant-gold" />
                </div>
                <h4 className="font-unbounded text-xl font-light text-white mb-3 group-hover:text-elegant-gold transition-colors text-left">{t('floor_types_section.finishes.metallic_effects.title')}</h4>
                <p className="font-manrope text-white/70 leading-relaxed text-left">{t('floor_types_section.finishes.metallic_effects.description')}</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-elegant-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-elegant-gold/20 transition-all duration-300">
                  <Tornado className="w-8 h-8 text-elegant-gold" />
                </div>
                <h4 className="font-unbounded text-xl font-light text-white mb-3 group-hover:text-elegant-gold transition-colors text-left">{t('floor_types_section.finishes.marble_effects.title')}</h4>
                <p className="font-manrope text-white/70 leading-relaxed text-left">{t('floor_types_section.finishes.marble_effects.description')}</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-elegant-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-elegant-gold/20 transition-all duration-300">
                  <Star className="w-8 h-8 text-elegant-gold" />
                </div>
                <h4 className="font-unbounded text-xl font-light text-white mb-3 group-hover:text-elegant-gold transition-colors text-left">{t('floor_types_section.finishes.spiral_checkerboard.title')}</h4>
                <p className="font-manrope text-white/70 leading-relaxed text-left">{t('floor_types_section.finishes.spiral_checkerboard.description')}</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-elegant-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-elegant-gold/20 transition-all duration-300">
                  <BrickWall className="w-8 h-8 text-elegant-gold" />
                </div>
                <h4 className="font-unbounded text-xl font-light text-white mb-3 group-hover:text-elegant-gold transition-colors text-left">{t('floor_types_section.finishes.refined_raw_concrete.title')}</h4>
                <p className="font-manrope text-white/70 leading-relaxed text-left">{t('floor_types_section.finishes.refined_raw_concrete.description')}</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-elegant-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-elegant-gold/20 transition-all duration-300">
                  <Image className="w-8 h-8 text-elegant-gold" />
                </div>
                <h4 className="font-unbounded text-xl font-light text-white mb-3 group-hover:text-elegant-gold transition-colors text-left">{t('floor_types_section.finishes.gold_mother_of_pearl_dust.title')}</h4>
                <p className="font-manrope text-white/70 leading-relaxed text-left">{t('floor_types_section.finishes.gold_mother_of_pearl_dust.description')}</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-elegant-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-elegant-gold/20 transition-all duration-300">
                  <Palette className="w-8 h-8 text-elegant-gold" />
                </div>
                <h4 className="font-unbounded text-xl font-light text-white mb-3 group-hover:text-elegant-gold transition-colors text-left">{t('floor_types_section.finishes.custom_logos_patterns.title')}</h4>
                <p className="font-manrope text-white/70 leading-relaxed text-left">{t('floor_types_section.finishes.custom_logos_patterns.description')}</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-elegant-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-elegant-gold/20 transition-all duration-300">
                  <Square className="w-8 h-8 text-elegant-gold" />
                </div>
                <h4 className="font-unbounded text-xl font-light text-white mb-3 group-hover:text-elegant-gold transition-colors text-left">{t('floor_types_section.finishes.matte_finish.title')}</h4>
                <p className="font-manrope text-white/70 leading-relaxed text-left">{t('floor_types_section.finishes.matte_finish.description')}</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-elegant-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-elegant-gold/20 transition-all duration-300">
                  <Sun className="w-8 h-8 text-elegant-gold" />
                </div>
                <h4 className="font-unbounded text-xl font-light text-white mb-3 group-hover:text-elegant-gold transition-colors text-left">{t('floor_types_section.finishes.glossy_finish.title')}</h4>
                <p className="font-manrope text-white/70 leading-relaxed text-left">{t('floor_types_section.finishes.glossy_finish.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorTypesSection;