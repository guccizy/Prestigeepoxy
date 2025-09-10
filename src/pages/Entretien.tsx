import React from 'react';
import { ArrowLeft, Droplets, Shield, Clock, AlertTriangle, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Entretien = () => {
  const { t } = useTranslation();
  const etapes = [
    {
      icon: Droplets,
      title: t('maintenance_page.steps.step1_title'),
      description: t('maintenance_page.steps.step1_description'),
      details: [
        t('maintenance_page.steps.step1_detail1'), 
        t('maintenance_page.steps.step1_detail2'), 
        t('maintenance_page.steps.step1_detail3'), 
        t('maintenance_page.steps.step1_detail4')
      ]
    },
    {
      icon: Shield,
      title: t('maintenance_page.steps.step2_title'),
      description: t('maintenance_page.steps.step2_description'),
      details: [
        t('maintenance_page.steps.step2_detail1'), 
        t('maintenance_page.steps.step2_detail2'), 
        t('maintenance_page.steps.step2_detail3'), 
        t('maintenance_page.steps.step2_detail4')
      ]
    },
    {
      icon: Sparkles,
      title: t('maintenance_page.steps.step3_title'),
      description: t('maintenance_page.steps.step3_description'),
      details: [
        t('maintenance_page.steps.step3_detail1'), 
        t('maintenance_page.steps.step3_detail2'), 
        t('maintenance_page.steps.step3_detail3'), 
        t('maintenance_page.steps.step3_detail4')
      ]
    }
  ];

  const produits = [
    {
      type: t('maintenance_page.products.recommended_type'),
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      items: [
        t('maintenance_page.products.recommended_item1'),
        t('maintenance_page.products.recommended_item2'),
        t('maintenance_page.products.recommended_item3'),
        t('maintenance_page.products.recommended_item4'),
        t('maintenance_page.products.recommended_item5')
      ]
    },
    {
      type: t('maintenance_page.products.avoid_type'),
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      items: [
        t('maintenance_page.products.avoid_item1'),
        t('maintenance_page.products.avoid_item2'),
        t('maintenance_page.products.avoid_item3'),
        t('maintenance_page.products.avoid_item4'),
        t('maintenance_page.products.avoid_item5')
      ]
    }
  ];

  const frequences = [
    { action: t('maintenance_page.schedule.action1'), frequence: t('maintenance_page.schedule.frequency1'), importance: t('maintenance_page.schedule.importance1') },
    { action: t('maintenance_page.schedule.action2'), frequence: t('maintenance_page.schedule.frequency2'), importance: t('maintenance_page.schedule.importance2') },
    { action: t('maintenance_page.schedule.action3'), frequence: t('maintenance_page.schedule.frequency3'), importance: t('maintenance_page.schedule.importance3') },
    { action: t('maintenance_page.schedule.action4'), frequence: t('maintenance_page.schedule.frequency4'), importance: t('maintenance_page.schedule.importance4') },
    { action: t('maintenance_page.schedule.action5'), frequence: t('maintenance_page.schedule.frequency5'), importance: t('maintenance_page.schedule.importance5') }
  ];

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
                {t('maintenance_page.hero.back_to_home')}
              </Link>
            </div>
            
            <h1 className="font-unbounded text-4xl md:text-6xl font-bold mb-6">
              {t('maintenance_page.hero.title_part1')} <span className="text-elegant-gold">{t('maintenance_page.hero.title_part2')}</span>
            </h1>
            <p className="font-manrope text-xl text-off-white max-w-2xl">
              {t('maintenance_page.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Étapes d'entretien */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded text-3xl font-bold text-deep-black text-center mb-12">
              {t('maintenance_page.steps_section.title_part1')} <span className="text-elegant-gold">{t('maintenance_page.steps_section.title_part2')}</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {etapes.map((etape, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-elegant-gold/10 rounded-full flex items-center justify-center mb-6">
                    <etape.icon className="w-8 h-8 text-elegant-gold" />
                  </div>
                  
                  <h3 className="font-unbounded text-xl font-semibold text-deep-black mb-4">
                    {etape.title}
                  </h3>
                  
                  <p className="text-anthracite mb-6 leading-relaxed">
                    {etape.description}
                  </p>

                  <ul className="space-y-2">
                    {etape.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3 text-anthracite">
                        <div className="w-2 h-2 bg-elegant-gold rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produits recommandés */}
        <section className="py-16 bg-anthracite text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded text-3xl font-bold text-center mb-12">
              {t('maintenance_page.products_section.title_part1')} <span className="text-elegant-gold">{t('maintenance_page.products_section.title_part2')}</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {produits.map((categorie, index) => (
                <div 
                  key={index}
                  className={`${categorie.bgColor} rounded-2xl p-8`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <categorie.icon className={`w-6 h-6 ${categorie.color}`} />
                    <h3 className={`font-unbounded text-xl font-semibold ${categorie.color}`}>
                      {categorie.type}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {categorie.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={`flex items-center gap-3 ${categorie.color}`}>
                        <div className={`w-2 h-2 ${categorie.color === 'text-green-600' ? 'bg-green-600' : 'bg-red-600'} rounded-full`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendrier d'entretien */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded text-3xl font-bold text-deep-black text-center mb-12">
              {t('maintenance_page.schedule_section.title_part1')} <span className="text-elegant-gold">{t('maintenance_page.schedule_section.title_part2')}</span>
            </h2>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-deep-black text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-unbounded font-semibold">{t('maintenance_page.schedule_table.header_action')}</th>
                      <th className="px-6 py-4 text-left font-unbounded font-semibold">{t('maintenance_page.schedule_table.header_frequency')}</th>
                      <th className="px-6 py-4 text-left font-unbounded font-semibold">{t('maintenance_page.schedule_table.header_importance')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {frequences.map((item, index) => (
                      <tr 
                        key={index}
                        className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-elegant-gold/5 transition-colors`}
                      >
                        <td className="px-6 py-4 font-semibold text-deep-black">
                          {item.action}
                        </td>
                        <td className="px-6 py-4 text-anthracite">
                          {item.frequence}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.importance === t('maintenance_page.schedule.importance1') ? 'bg-red-100 text-red-800' :
                            item.importance === t('maintenance_page.schedule.importance2') ? 'bg-orange-100 text-orange-800' :
                            item.importance === t('maintenance_page.schedule.importance3') ? 'bg-yellow-100 text-yellow-800' :
                            item.importance === t('maintenance_page.schedule.importance4') ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.importance}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-elegant-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-unbounded text-3xl font-bold text-deep-black mb-6">
              {t('maintenance_page.cta.title')}
            </h2>
            <p className="font-manrope text-xl text-deep-black/80 mb-8">
              {t('maintenance_page.cta.subtitle')}
            </p>
            <button 
              onClick={() => {
                window.location.href = '/#contact';
              }}
              className="bg-deep-black text-white px-8 py-4 rounded-full font-semibold hover:bg-anthracite transition-all duration-300 hover:scale-105"
            >
              {t('maintenance_page.cta.button')}
            </button>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Entretien;