import React, { useState } from 'react';
import { ArrowLeft, Download, Clock, CheckCircle, BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  const guides = [
    {
      id: 1,
      title: t('guides_page.guide1.title'),
      description: t('guides_page.guide1.description'),
      duration: t('guides_page.guide1.duration'),
      pages: t('guides_page.guide1.pages'),
      category: t('guides_page.guide1.category'),
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: [t('guides_page.guide1.topics.topic1'), t('guides_page.guide1.topics.topic2'), t('guides_page.guide1.topics.topic3'), t('guides_page.guide1.topics.topic4')]
    },
    {
      id: 2,
      title: t('guides_page.guide2.title'),
      description: t('guides_page.guide2.description'),
      duration: t('guides_page.guide2.duration'),
      pages: t('guides_page.guide2.pages'),
      category: t('guides_page.guide2.category'),
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: [t('guides_page.guide2.topics.topic1'), t('guides_page.guide2.topics.topic2'), t('guides_page.guide2.topics.topic3'), t('guides_page.guide2.topics.topic4')]
    },
    {
      id: 3,
      title: t('guides_page.guide3.title'),
      description: t('guides_page.guide3.description'),
      duration: t('guides_page.guide3.duration'),
      pages: t('guides_page.guide3.pages'),
      category: t('guides_page.guide3.category'),
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: [t('guides_page.guide3.topics.topic1'), t('guides_page.guide3.topics.topic2'), t('guides_page.guide3.topics.topic3'), t('guides_page.guide3.topics.topic4')]
    },
    {
      id: 4,
      title: t('guides_page.guide4.title'),
      description: t('guides_page.guide4.description'),
      duration: t('guides_page.guide4.duration'),
      pages: t('guides_page.guide4.pages'),
      category: t('guides_page.guide4.category'),
      image: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: [t('guides_page.guide4.topics.topic1'), t('guides_page.guide4.topics.topic2'), t('guides_page.guide4.topics.topic3'), t('guides_page.guide4.topics.topic4')]
    },
    {
      id: 5,
      title: t('guides_page.guide5.title'),
      description: t('guides_page.guide5.description'),
      duration: t('guides_page.guide5.duration'),
      pages: t('guides_page.guide5.pages'),
      category: t('guides_page.guide5.category'),
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: [t('guides_page.guide5.topics.topic1'), t('guides_page.guide5.topics.topic2'), t('guides_page.guide5.topics.topic3'), t('guides_page.guide5.topics.topic4')]
    },
    {
      id: 6,
      title: t('guides_page.guide6.title'),
      description: t('guides_page.guide6.description'),
      duration: t('guides_page.guide6.duration'),
      pages: t('guides_page.guide6.pages'),
      category: t('guides_page.guide6.category'),
      image: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=600',
      topics: [t('guides_page.guide6.topics.topic1'), t('guides_page.guide6.topics.topic2'), t('guides_page.guide6.topics.topic3'), t('guides_page.guide6.topics.topic4')]
    }
  ];

  const filteredGuides = guides.filter(guide => 
    guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                {t('guides_page.hero.back_to_home')}
              </Link>
            </div>
            
            <h1 className="font-unbounded text-4xl md:text-6xl font-bold mb-6">
              {t('guides_page.hero.title')} <span className="text-elegant-gold">{t('guides_page.hero.title_span')}</span>
            </h1>
            <p className="font-manrope text-xl text-off-white max-w-2xl">
              {t('guides_page.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-md mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('guides_page.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-elegant-gold focus:outline-none transition-colors"
              />
            </div>

            {/* Guides Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide) => (
                <div 
                  key={guide.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-elegant-gold text-deep-black px-3 py-1 rounded-full font-semibold text-sm">
                        {t(`guides_page.guide_categories.${guide.category.toLowerCase()}`)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-unbounded text-xl font-semibold text-deep-black mb-3 group-hover:text-elegant-gold transition-colors">
                      {guide.title}
                    </h3>
                    
                    <p className="text-anthracite mb-4 leading-relaxed">
                      {guide.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {guide.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {guide.pages}
                      </div>
                    </div>

                    <div className="mb-6 flex-grow">
                      <h4 className="font-semibold text-deep-black mb-2">{t('guides_page.content_title')}</h4>
                      <ul className="space-y-1">
                        {guide.topics.map((topic, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-anthracite">
                            <CheckCircle className="w-4 h-4 text-elegant-gold" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-deep-black text-white py-3 rounded-xl font-semibold hover:bg-elegant-gold hover:text-deep-black transition-all duration-300 flex items-center justify-center gap-2 mt-auto">
                      <Download className="w-5 h-5" />
                      {t('guides_page.download_button')}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredGuides.length === 0 && (
              <div className="text-center py-16">
                <p className="font-manrope text-xl text-anthracite">
                  {t('guides_page.no_guides_found')}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Guides;