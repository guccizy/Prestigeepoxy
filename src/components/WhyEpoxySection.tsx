import React from 'react';
import { Shield, Sparkles, Sprout, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyEpoxySection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Shield,
      title: t('why_epoxy_section.item_1_title'),
      description: t('why_epoxy_section.item_1_description')
    },
    {
      icon: Sparkles,
      title: t('why_epoxy_section.item_2_title'),
      description: t('why_epoxy_section.item_2_description')
    },
    {
      icon: Sprout,
      title: t('why_epoxy_section.item_3_title'),
      description: t('why_epoxy_section.item_3_description')
    },
    {
      icon: Home,
      title: t('why_epoxy_section.item_4_title'),
      description: t('why_epoxy_section.item_4_description')
    },
  ];

  return (
    <section className="py-20 bg-off-white text-deep-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <h2 className="font-unbounded text-3xl md:text-5xl font-light text-center mb-16">
          {t('why_epoxy_section.title')}
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-xl group hover:bg-white transition-all duration-300">
              <div className="w-16 h-16 bg-elegant-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-elegant-gold transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-elegant-gold group-hover:text-deep-black transition-colors duration-300" />
              </div>
              <h3 className="font-unbounded text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="font-manrope text-deep-black/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEpoxySection;

