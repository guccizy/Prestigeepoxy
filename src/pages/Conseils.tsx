import React, { useState } from 'react';
import { ArrowLeft, Lightbulb, Home, Building2, Factory, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Conseils = () => {
  const [activeCategory, setActiveCategory] = useState('residentiel');
  const { t } = useTranslation();

  const categories = [
    { id: 'residentiel', name: t('advice_page.categories.residential'), icon: Home },
    { id: 'commercial', name: t('advice_page.categories.commercial'), icon: Building2 },
    { id: 'industriel', name: t('advice_page.categories.industrial'), icon: Factory }
  ];

  const conseils = {
    residentiel: [
      {
        title: t('advice_page.residential.tip1_title'),
        content: t('advice_page.residential.tip1_content'),
        tips: [
          t('advice_page.residential.tip1_tip1'), 
          t('advice_page.residential.tip1_tip2'), 
          t('advice_page.residential.tip1_tip3')
        ]
      },
      {
        title: t('advice_page.residential.tip2_title'),
        content: t('advice_page.residential.tip2_content'),
        tips: [
          t('advice_page.residential.tip2_tip1'), 
          t('advice_page.residential.tip2_tip2'), 
          t('advice_page.residential.tip2_tip3')
        ]
      },
      {
        title: t('advice_page.residential.tip3_title'),
        content: t('advice_page.residential.tip3_content'),
        tips: [
          t('advice_page.residential.tip3_tip1'), 
          t('advice_page.residential.tip3_tip2'), 
          t('advice_page.residential.tip3_tip3')
        ]
      }
    ],
    commercial: [
      {
        title: t('advice_page.commercial.tip1_title'),
        content: t('advice_page.commercial.tip1_content'),
        tips: [
          t('advice_page.commercial.tip1_tip1'), 
          t('advice_page.commercial.tip1_tip2'), 
          t('advice_page.commercial.tip1_tip3')
        ]
      },
      {
        title: t('advice_page.commercial.tip2_title'),
        content: t('advice_page.commercial.tip2_content'),
        tips: [
          t('advice_page.commercial.tip2_tip1'), 
          t('advice_page.commercial.tip2_tip2'), 
          t('advice_page.commercial.tip2_tip3')
        ]
      },
      {
        title: t('advice_page.commercial.tip3_title'),
        content: t('advice_page.commercial.tip3_content'),
        tips: [
          t('advice_page.commercial.tip3_tip1'), 
          t('advice_page.commercial.tip3_tip2'), 
          t('advice_page.commercial.tip3_tip3')
        ]
      }
    ],
    industriel: [
      {
        title: t('advice_page.industrial.tip1_title'),
        content: t('advice_page.industrial.tip1_content'),
        tips: [
          t('advice_page.industrial.tip1_tip1'), 
          t('advice_page.industrial.tip1_tip2'), 
          t('advice_page.industrial.tip1_tip3')
        ]
      },
      {
        title: t('advice_page.industrial.tip2_title'),
        content: t('advice_page.industrial.tip2_content'),
        tips: [
          t('advice_page.industrial.tip2_tip1'), 
          t('advice_page.industrial.tip2_tip2'), 
          t('advice_page.industrial.tip2_tip3')
        ]
      },
      {
        title: t('advice_page.industrial.tip3_title'),
        content: t('advice_page.industrial.tip3_content'),
        tips: [
          t('advice_page.industrial.tip3_tip1'), 
          t('advice_page.industrial.tip3_tip2'), 
          t('advice_page.industrial.tip3_tip3')
        ]
      }
    ]
  };

  return (
    <div className="font-manrope">
      
      <main className="pt-20 min-h-screen bg-off-white">
        {/* Hero Section */}
        <section className="bg-deep-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-off-white hover:text-elegant-gold transition-colors"
                reloadDocument
              >
                <ArrowLeft className="w-4 h-4" />
                {t('advice_page.hero.back_to_home')}
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="w-12 h-12 text-elegant-gold" />
              <h1 className="font-unbounded text-4xl md:text-6xl font-bold">
                {t('advice_page.hero.title')}
              </h1>
            </div>
            <p className="font-manrope text-xl text-off-white max-w-2xl">
              {t('advice_page.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-elegant-gold text-deep-black shadow-lg'
                      : 'bg-white text-anthracite hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Conseils Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {conseils[activeCategory as keyof typeof conseils].map((conseil, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-unbounded text-2xl font-semibold text-deep-black mb-4">
                    {conseil.title}
                  </h3>
                  
                  <p className="text-anthracite mb-6 leading-relaxed">
                    {conseil.content}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-deep-black flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-elegant-gold" />
                      {t('advice_page.key_points_title')}
                    </h4>
                    <ul className="space-y-2">
                      {conseil.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center gap-3 text-anthracite">
                          <div className="w-2 h-2 bg-elegant-gold rounded-full"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="text-elegant-gold hover:text-elegant-gold/80 transition-colors flex items-center gap-2 font-semibold">
                      {t('advice_page.learn_more_button')}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-anthracite text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-unbounded text-3xl font-bold mb-6">
              {t('advice_page.cta.title_part1')} <span className="text-elegant-gold">{t('advice_page.cta.title_part2')}</span> ?
            </h2>
            <p className="font-manrope text-xl text-off-white mb-8">
              {t('advice_page.cta.subtitle')}
            </p>
            <button 
              onClick={() => {
                window.location.href = '/#contact';
              }}
              className="bg-elegant-gold text-deep-black px-8 py-4 rounded-full font-semibold hover:bg-elegant-gold/90 transition-all duration-300 hover:scale-105"
            >
              {t('advice_page.cta.button')}
            </button>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Conseils;