import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DevisPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    squareFootage: '',
    finishType: '',
    message: ''
  });
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact_section.email'),
      subtitle: t('contact_section.email_subtitle'),
      value: 'contact@prestigeepoxy.ca',
      bgColor: 'bg-elegant-gold/10'
    },
    {
      icon: Phone,
      title: t('contact_section.phone'),
      subtitle: t('contact_section.phone_subtitle'),
      value: '+1 (514) 123-4567',
      bgColor: 'bg-elegant-gold/10'
    },
    {
      icon: MapPin,
      title: t('contact_section.address'),
      subtitle: t('contact_section.address_subtitle'),
      value: '1234 Rue Saint-Denis, Montréal',
      bgColor: 'bg-elegant-gold/10'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(t('quote_page.form_sending_message'), formData);

    const { name, email, project, message, squareFootage, finishType } = formData;

    if (!name || !email || !project || !message || !squareFootage || !finishType) {
      alert(t('quote_page.fill_all_fields_alert'));
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/quote', { // Assurez-vous que le port correspond à votre backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || t('quote_page.success_message'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          squareFootage: '',
          finishType: '',
          message: ''
        });
      } else {
        alert(data.message || t('quote_page.error_message'));
      }
    } catch (error) {
      console.error(t('quote_page.form_send_error'), error);
      alert(t('quote_page.alert_error_message'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="font-manrope">
      
      <main className="pt-20 min-h-screen bg-off-white">
        <section className="py-16 bg-deep-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-unbounded text-4xl md:text-6xl font-bold mb-6">
              {t('quote_page.hero_title')}
            </h1>
            <p className="font-manrope text-xl text-off-white max-w-2xl">
              {t('quote_page.hero_subtitle')}
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="font-unbounded text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-deep-black mb-4">
                {t('contact_section.title')}
              </h2>
              <p className="font-manrope text-base sm:text-lg md:text-xl text-anthracite/70">
                {t('contact_section.subtitle')}
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 mx-auto max-w-3xl">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-elegant-gold" />
                  </div>
                  
                  <h3 className="font-unbounded text-base sm:text-lg md:text-xl font-semibold text-deep-black mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="font-manrope text-sm text-elegant-gold mb-3">
                    {method.subtitle}
                  </p>
                  
                  <p className="font-manrope text-sm sm:text-base text-deep-black font-medium underline decoration-elegant-gold/30 hover:decoration-elegant-gold transition-colors break-words">
                    {method.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-luxury p-6 sm:p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder={t('contact_section.full_name')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 sm:p-4 bg-gray-50 border-0 rounded-xl font-manrope text-sm sm:text-base text-deep-black placeholder-anthracite/50 focus:outline-none focus:ring-2 focus:ring-elegant-gold/20 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder={t('contact_section.email_address')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 sm:p-4 bg-gray-50 border-0 rounded-xl font-manrope text-sm sm:text-base text-deep-black placeholder-anthracite/50 focus:outline-none focus:ring-2 focus:ring-elegant-gold/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder={t('contact_section.phone_number')}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 sm:p-4 bg-gray-50 border-0 rounded-xl font-manrope text-sm sm:text-base text-deep-black placeholder-anthracite/50 focus:outline-none focus:ring-2 focus:ring-elegant-gold/20 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full p-3 sm:p-4 bg-gray-50 border-0 rounded-xl font-manrope text-sm sm:text-base text-deep-black focus:outline-none focus:ring-2 focus:ring-elegant-gold/20 transition-all duration-300"
                      >
                        <option value="">{t('contact_section.project_type')}</option>
                        <option value="residentiel">{t('contact_section.residential')}</option>
                        <option value="commercial">{t('contact_section.commercial')}</option>
                        <option value="industriel">{t('contact_section.industrial')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <input
                      type="number"
                      name="squareFootage"
                      placeholder={t('contact_section.square_footage_placeholder')}
                      value={formData.squareFootage}
                      onChange={handleChange}
                      required
                      className="w-full p-3 sm:p-4 bg-gray-50 border-0 rounded-xl font-manrope text-sm sm:text-base text-deep-black placeholder-anthracite/50 focus:outline-none focus:ring-2 focus:ring-elegant-gold/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <select
                      name="finishType"
                      value={formData.finishType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 sm:p-4 bg-gray-50 border-0 rounded-xl font-manrope text-sm sm:text-base text-deep-black focus:outline-none focus:ring-2 focus:ring-elegant-gold/20 transition-all duration-300"
                    >
                      <option value="">{t('contact_section.finish_type')}</option>
                      <option value="couleurs-unies">{t('contact_section.finish_options.solid_colors')}</option>
                      <option value="effets-metalliques">{t('contact_section.finish_options.metallic_effects')}</option>
                      <option value="effets-marbres">{t('contact_section.finish_options.marble_effects')}</option>
                      <option value="spirales-damier">{t('contact_section.finish_options.spiral_checkerboard')}</option>
                      <option value="beton-brut-raffinee">{t('contact_section.finish_options.refined_raw_concrete')}</option>
                      <option value="poussiere-or-nacre">{t('contact_section.finish_options.gold_mother_of_pearl_dust')}</option>
                      <option value="logos-motifs">{t('contact_section.finish_options.custom_logos_patterns')}</option>
                      <option value="fini-mat">{t('contact_section.finish_options.matte_finish')}</option>
                      <option value="fini-brillant">{t('contact_section.finish_options.glossy_finish')}</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder={t('contact_section.message_placeholder')}
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full p-3 sm:p-4 bg-gray-50 border-0 rounded-xl font-manrope text-sm sm:text-base text-deep-black placeholder-anthracite/50 focus:outline-none focus:ring-2 focus:ring-elegant-gold/20 transition-all duration-300 resize-vertical"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-deep-black text-white px-8 sm:px-10 md:px-12 py-3 md:py-4 rounded-full font-manrope font-semibold text-sm sm:text-base md:text-lg hover:bg-anthracite transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                    >
                      {t('contact_section.send_message')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
 
    </div>
  );
};

export default DevisPage;
