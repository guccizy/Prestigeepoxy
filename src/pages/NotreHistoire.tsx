import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';

const NotreHistoire: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="font-manrope bg-off-white min-h-screen pt-20">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-anthracite hover:text-elegant-gold transition-colors font-manrope"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('notre_histoire_page.back')}
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="font-unbounded text-4xl font-bold text-deep-black mb-8">
            {t('notre_histoire_page.title_part1')} <span className="text-elegant-gold">{t('notre_histoire_page.title_part2')}</span>
          </h1>

          <div className="space-y-8 text-anthracite text-lg leading-relaxed">
            {/* À propos de nous */}
            <section>
              <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4">
                {t('notre_histoire_page.about_us_title')}
              </h2>
              <p className="mb-4">
                {t('notre_histoire_page.about_us_p1')}
              </p>
              <p>
                {t('notre_histoire_page.about_us_p2')}
              </p>
            </section>

            {/* Notre ADN */}
            <section>
              <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4 mt-8">
                {t('notre_histoire_page.our_dna_title')}
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>{t('notre_histoire_page.dna_ambitious_disciplined_title')}</strong> {t('notre_histoire_page.dna_ambitious_disciplined_description')}</li>
                <li><strong>{t('notre_histoire_page.dna_meticulous_perfectionist_title')}</strong> {t('notre_histoire_page.dna_meticulous_perfectionist_description')}</li>
                <li><strong>{t('notre_histoire_page.dna_creative_passionate_title')}</strong> {t('notre_histoire_page.dna_creative_passionate_description')}</li>
                <li><strong>{t('notre_histoire_page.dna_attentive_human_title')}</strong> {t('notre_histoire_page.dna_attentive_human_description')}</li>
              </ul>
            </section>

            {/* Pourquoi Prestige Epoxy ? */}
            <section>
              <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4 mt-8">
                {t('notre_histoire_page.why_prestige_epoxy_title')}
              </h2>
              <p className="mb-4">
                {t('notre_histoire_page.why_prestige_epoxy_p1')}
              </p>
              <p>
                {t('notre_histoire_page.why_prestige_epoxy_p2')}
              </p>
            </section>

            {/* Une équipe qui se complète à la perfection */}
            <section>
              <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4 mt-8">
                {t('notre_histoire_page.team_perfectly_complements_title')}
              </h2>
              <p>
                {t('notre_histoire_page.team_perfectly_complements_content')}
              </p>
            </section>

            {/* Plus qu’une entreprise, une histoire */}
            <section>
              <h2 className="font-unbounded text-2xl font-semibold text-deep-black mb-4 mt-8">
                {t('notre_histoire_page.more_than_company_story_title')}
              </h2>
              <p className="mb-4">
                {t('notre_histoire_page.more_than_company_story_p1')}
              </p>
              <p>
                {t('notre_histoire_page.more_than_company_story_p2')}
              </p>
            </section>

            {/* Slogan final */}
            <section className="text-center mt-12">
              <p className="font-unbounded text-3xl font-bold text-deep-black mb-4">
                <span className="text-elegant-gold">{t('notre_histoire_page.final_slogan_part1')}</span>{t('notre_histoire_page.final_slogan_part2')}
              </p>
              <p className="font-manrope text-xl text-anthracite">
                {t('notre_histoire_page.elevate_your_space')}
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotreHistoire;
