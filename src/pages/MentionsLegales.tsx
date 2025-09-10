import { ArrowLeft, Building2, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MentionsLegales = () => {
  const { t } = useTranslation();
  return (
    <div className="font-manrope">
      
      <main className="pt-20 min-h-screen bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-anthracite hover:text-elegant-gold transition-colors font-manrope"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('mentions_legales_page.back')}
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="font-unbounded text-4xl font-bold text-deep-black mb-8">
              {t('mentions_legales_page.title_part1')} <span className="text-elegant-gold">{t('mentions_legales_page.title_part2')}</span>
            </h1>

            <div className="space-y-8 text-anthracite">
              {/* Informations légales */}
              <section>
                <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-elegant-gold" />
                  {t('mentions_legales_page.legal_info_section_title')}
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl space-y-3">
                  <p><strong>{t('mentions_legales_page.company_name')}</strong> {t('mentions_legales_page.company_value')}</p>
                  <p><strong>{t('mentions_legales_page.head_office')}</strong> {t('mentions_legales_page.head_office_value')}</p>
                  <p><strong>{t('mentions_legales_page.business_number')}</strong> {t('mentions_legales_page.business_number_value')}</p>
                  <p><strong>{t('mentions_legales_page.tps_number')}</strong> {t('mentions_legales_page.tps_number_value')}</p>
                  <p><strong>{t('mentions_legales_page.tvq_number')}</strong> {t('mentions_legales_page.tvq_number_value')}</p>
                  <p><strong>{t('mentions_legales_page.rbq_license')}</strong> {t('mentions_legales_page.rbq_license_value')}</p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-elegant-gold" />
                  {t('mentions_legales_page.contact_section_title')}
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl space-y-3">
                  <p><strong>{t('mentions_legales_page.email_label')}</strong> {t('mentions_legales_page.email_value')}</p>
                  <p><strong>{t('mentions_legales_page.phone_label')}</strong> {t('mentions_legales_page.phone_value')}</p>
                  <p><strong>{t('mentions_legales_page.publication_director')}</strong> {t('mentions_legales_page.publication_director_value')}</p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4">
                  {t('mentions_legales_page.intellectual_property_section_title')}
                </h2>
                <p className="leading-relaxed mb-4">
                  {t('mentions_legales_page.intellectual_property_p1')}
                </p>
                <p className="leading-relaxed">
                  {t('mentions_legales_page.intellectual_property_p2')}
                </p>
              </section>

              {/* Protection des données */}
              <section>
                <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4">
                  {t('mentions_legales_page.data_protection_section_title')}
                </h2>
                <p className="leading-relaxed mb-4">
                  {t('mentions_legales_page.data_protection_p1')}
                </p>
                <p className="leading-relaxed">
                  {t('mentions_legales_page.data_protection_p2')}
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4">
                  {t('mentions_legales_page.cookies_section_title')}
                </h2>
                <p className="leading-relaxed">
                  {t('mentions_legales_page.cookies_p1')}
                </p>
              </section>

              {/* Responsabilité */}
              <section>
                <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4">
                  {t('mentions_legales_page.liability_section_title')}
                </h2>
                <p className="leading-relaxed">
                  {t('mentions_legales_page.liability_p1')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
 
    </div>
  );
};

export default MentionsLegales;