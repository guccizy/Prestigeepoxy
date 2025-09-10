import React from 'react';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, HardHat, Eye, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Securite = () => {
  const { t } = useTranslation();
  const normes = [
    {
      icon: Shield,
      title: t('securite_page.normes.security_standards_title'),
      items: [
        t('securite_page.normes.csa_certification'),
        t('securite_page.normes.can_cgsb_compliance'),
        t('securite_page.normes.whmis_compliance'),
        t('securite_page.normes.ulc_fire_resistance_tests'),
        t('securite_page.normes.accredited_body_validation')
      ]
    },
    {
      icon: HardHat,
      title: t('securite_page.normes.site_safety_title'),
      items: [
        t('securite_page.normes.ppe'),
        t('securite_page.normes.adapted_ventilation'),
        t('securite_page.normes.work_zone_signaling'),
        t('securite_page.normes.continuous_training'),
        t('securite_page.normes.emergency_protocols')
      ]
    },
    {
      icon: Eye,
      title: t('securite_page.normes.usage_safety_title'),
      items: [
        t('securite_page.normes.anti_slip_finishes'),
        t('securite_page.normes.chemical_resistance'),
        t('securite_page.normes.non_toxic_surface'),
        t('securite_page.normes.food_compatibility'),
        t('securite_page.normes.uv_resistance')
      ]
    }
  ];

  const precautions = [
    {
      phase: t('securite_page.precautions.before_installation_phase'),
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-800',
      items: [
        t('securite_page.precautions.before_installation_items.full_support_diagnostic'),
        t('securite_page.precautions.before_installation_items.adhesion_humidity_test'),
        t('securite_page.precautions.before_installation_items.ventilation_check'),
        t('securite_page.precautions.before_installation_items.adjacent_surface_protection'),
        t('securite_page.precautions.before_installation_items.access_exit_planning')
      ]
    },
    {
      phase: t('securite_page.precautions.during_installation_phase'),
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-800',
      items: [
        t('securite_page.precautions.during_installation_items.mandatory_ppe'),
        t('securite_page.precautions.during_installation_items.forced_ventilation'),
        t('securite_page.precautions.during_installation_items.no_smoking_open_flames'),
        t('securite_page.precautions.during_installation_items.continuous_temperature_monitoring'),
        t('securite_page.precautions.during_installation_items.drying_time_respect')
      ]
    },
    {
      phase: t('securite_page.precautions.after_installation_phase'),
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-800',
      items: [
        t('securite_page.precautions.after_installation_items.full_curing_wait'),
        t('securite_page.precautions.after_installation_items.prolonged_ventilation'),
        t('securite_page.precautions.after_installation_items.progressive_commissioning_test'),
        t('securite_page.precautions.after_installation_items.safe_maintenance_training'),
        t('securite_page.precautions.after_installation_items.conformity_certificate_delivery')
      ]
    }
  ];

  const certifications = [
    { nom: t('securite_page.certifications.csa_name'), description: t('securite_page.certifications.csa_description') },
    { nom: t('securite_page.certifications.can_name'), description: t('securite_page.certifications.can_description') },
    { nom: t('securite_page.certifications.ulc_name'), description: t('securite_page.certifications.ulc_description') },
    { nom: t('securite_page.certifications.iso_9001_name'), description: t('securite_page.certifications.iso_9001_description') },
    { nom: t('securite_page.certifications.iso_14001_name'), description: t('securite_page.certifications.iso_14001_description') }
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
                {t('securite_page.back_to_home')}
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-elegant-gold" />
              <h1 className="font-unbounded text-4xl md:text-6xl font-bold">
                {t('securite_page.title_part1')} <span className="text-elegant-gold">{t('securite_page.title_part2')}</span>
              </h1>
            </div>
            <p className="font-manrope text-xl text-off-white max-w-2xl">
              {t('securite_page.subtitle')}
            </p>
          </div>
        </section>

        {/* Normes de sécurité */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded text-3xl font-bold text-deep-black text-center mb-12">
              {t('securite_page.commitments_title_part1')} <span className="text-elegant-gold">{t('securite_page.commitments_title_part2')}</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {normes.map((norme, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-elegant-gold/10 rounded-full flex items-center justify-center mb-6">
                    <norme.icon className="w-8 h-8 text-elegant-gold" />
                  </div>
                  
                  <h3 className="font-unbounded text-xl font-semibold text-deep-black mb-6">
                    {norme.title}
                  </h3>

                  <ul className="space-y-3">
                    {norme.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-anthracite">
                        <CheckCircle className="w-5 h-5 text-elegant-gold mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Précautions par phase */}
        <section className="py-16 bg-anthracite text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded text-3xl font-bold text-center mb-12">
              {t('securite_page.precautions_title_part1')} <span className="text-elegant-gold">{t('securite_page.precautions_title_part2')}</span>
            </h2>

            <div className="space-y-8">
              {precautions.map((precaution, index) => (
                <div 
                  key={index}
                  className={`${precaution.color} border-2 rounded-2xl p-8`}
                >
                  <h3 className={`font-unbounded text-2xl font-semibold ${precaution.textColor} mb-6`}>
                    {precaution.phase}
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {precaution.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={`flex items-center gap-3 ${precaution.textColor}`}>
                        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-unbounded text-3xl font-bold text-deep-black text-center mb-12">
              {t('securite_page.certifications_title_part1')} <span className="text-elegant-gold">{t('securite_page.certifications_title_part2')}</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-elegant-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-unbounded font-bold text-deep-black text-lg">
                      {cert.nom}
                    </span>
                  </div>
                  <p className="font-semibold text-deep-black mb-2">{cert.nom}</p>
                  <p className="text-sm text-anthracite">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact sécurité */}
        <section className="py-16 bg-deep-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Zap className="w-16 h-16 text-elegant-gold mx-auto mb-6" />
            <h2 className="font-unbounded text-3xl font-bold mb-6">
              {t('securite_page.security_contact_title_part1')} <span className="text-elegant-gold">{t('securite_page.security_contact_title_part2')}</span> ?
            </h2>
            <p className="font-manrope text-xl text-off-white mb-8">
              {t('securite_page.security_contact_subtitle')}
            </p>
            <button 
              onClick={() => {
                window.location.href = '/#contact';
              }}
              className="bg-elegant-gold text-deep-black px-8 py-4 rounded-full font-semibold hover:bg-elegant-gold/90 transition-all duration-300 hover:scale-105"
            >
              {t('securite_page.contact_security_team_button')}
            </button>
          </div>
        </section>
      </main>
      </div>
   );
};

export default Securite;