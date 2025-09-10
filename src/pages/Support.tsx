import { ArrowLeft, MessageCircle, Phone, Mail, Clock, FileText, Video, Download, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Support = () => {
  const { t } = useTranslation();

  const supportOptions = [
    {
      icon: Phone,
      title: t('support_page.options.phone_support_title'),
      description: t('support_page.options.phone_support_description'),
      availability: t('support_page.options.phone_support_availability'),
      contact: t('support_page.options.phone_support_contact'),
      responseTime: t('support_page.options.immediate'),
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      icon: Mail,
      title: t('support_page.options.email_support_title'),
      description: t('support_page.options.email_support_description'),
      availability: t('support_page.options.email_support_availability'),
      contact: t('support_page.options.email_support_contact'),
      responseTime: t('support_page.options.within_4h'),
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      icon: MessageCircle,
      title: t('support_page.options.chat_support_title'),
      description: t('support_page.options.chat_support_description'),
      availability: t('support_page.options.chat_support_availability'),
      contact: t('support_page.options.chat_support_contact'),
      responseTime: t('support_page.options.instant'),
      color: 'bg-purple-50 border-purple-200 text-purple-800'
    }
  ];

  const ressources = [
    {
      icon: FileText,
      title: t('support_page.resources.technical_doc_title'),
      description: t('support_page.resources.technical_doc_description'),
      items: [t('support_page.resources.technical_doc_items.datasheets'), t('support_page.resources.technical_doc_items.installation_guides'), t('support_page.resources.technical_doc_items.product_specs'), t('support_page.resources.technical_doc_items.quality_certs')]
    },
    {
      icon: Video,
      title: t('support_page.resources.video_tutorials_title'),
      description: t('support_page.resources.video_tutorials_description'),
      items: [t('support_page.resources.video_tutorials_items.cleaning_techniques'), t('support_page.resources.video_tutorials_items.minor_repairs'), t('support_page.resources.video_tutorials_items.visual_inspection'), t('support_page.resources.video_tutorials_items.best_practices')]
    },
    {
      icon: Download,
      title: t('support_page.resources.calculation_tools_title'),
      description: t('support_page.resources.calculation_tools_description'),
      items: [t('support_page.resources.calculation_tools_items.surface_calculator'), t('support_page.resources.calculation_tools_items.cost_estimator'), t('support_page.resources.calculation_tools_items.quantity_guide'), t('support_page.resources.calculation_tools_items.project_planner')]
    }
  ];

  const faqSupport = [
    {
      question: t('support_page.faq_items.q1'),
      answer: t('support_page.faq_items.a1')
    },
    {
      question: t('support_page.faq_items.q2'),
      answer: t('support_page.faq_items.a2')
    },
    {
      question: t('support_page.faq_items.q3'),
      answer: t('support_page.faq_items.a3')
    },
    {
      question: t('support_page.faq_items.q4'),
      answer: t('support_page.faq_items.a4')
    }
  ];

  return (
    <div className="font-manrope">
      
      <main className="pt-20 min-h-screen bg-off-white">
        {/* Hero Section */}
        <section className="bg-deep-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-off-white hover:text-elegant-gold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t('support_page.back_to_home')}
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <MessageCircle className="w-12 h-12 text-elegant-gold" />
              <h1 className="font-unbounded text-4xl md:text-6xl font-bold">
                {t('support_page.title_part1')} <span className="text-elegant-gold">{t('support_page.title_part2')}</span>
              </h1>
            </div>
            <p className="font-manrope text-xl text-off-white max-w-2xl">
              {t('support_page.subtitle')}
            </p>
          </div>
        </section>

        {/* Options de support */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded text-3xl font-bold text-deep-black text-center mb-12">
              {t('support_page.contact_title_part1')} <span className="text-elegant-gold">{t('support_page.contact_title_part2')}</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div 
                  key={index}
                  className={`${option.color} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <option.icon className="w-8 h-8" />
                    <h3 className="font-unbounded text-xl font-semibold">
                      {option.title}
                    </h3>
                  </div>
                  
                  <p className="mb-4 font-medium">
                    {option.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{option.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>{option.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span>{t('support_page.options.response_time', { time: option.responseTime })}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-deep-black text-white py-3 rounded-xl font-semibold hover:bg-anthracite transition-colors">
                    {t('support_page.contact_now_button')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ressources d'aide */}
        <section className="py-16 bg-anthracite text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded text-3xl font-bold text-center mb-12">
              {t('support_page.resources_title_part1')}<span className="text-elegant-gold">{t('support_page.resources_title_part2')}</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {ressources.map((ressource, index) => (
                <div 
                  key={index}
                  className="bg-deep-black rounded-2xl p-8 hover:bg-deep-black/80 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-elegant-gold/10 rounded-full flex items-center justify-center mb-6">
                    <ressource.icon className="w-8 h-8 text-elegant-gold" />
                  </div>
                  
                  <h3 className="font-unbounded text-xl font-semibold mb-4">
                    {ressource.title}
                  </h3>
                  
                  <p className="text-off-white mb-6">
                    {ressource.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {ressource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-elegant-gold rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-elegant-gold text-deep-black py-3 rounded-xl font-semibold hover:bg-elegant-gold/90 transition-colors">
                    {t('support_page.access_resources_button')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Support */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded text-3xl font-bold text-deep-black text-center mb-12">
              {t('support_page.faq_title_part1')} <span className="text-elegant-gold">{t('support_page.faq_title_part2')}</span> {t('support_page.faq_title_part3')}
            </h2>

            <div className="space-y-6">
              {faqSupport.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h3 className="font-unbounded text-xl font-semibold text-deep-black mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-anthracite leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-elegant-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-unbounded text-3xl font-bold text-deep-black mb-6">
              {t('support_page.cta_title')}
            </h2>
            <p className="font-manrope text-xl text-deep-black/80 mb-8">
              {t('support_page.cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-deep-black text-white px-8 py-4 rounded-full font-semibold hover:bg-anthracite transition-all duration-300">
                {t('support_page.cta_call_button')}
              </button>
              <button className="bg-white text-deep-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
                {t('support_page.cta_email_button')}
              </button>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Support;