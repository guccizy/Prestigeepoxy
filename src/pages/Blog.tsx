import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  subtitle?: string;
  author: string;
  content: string;
  image_url?: string;
  created_at: string;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/blog`);
        if (!response.ok) {
          throw new Error(t('blog_page.fetch_error'));
        }
        const data: BlogPost[] = await response.json();
        setArticles(data);
      } catch (err: any) {
        console.error('Error fetching blog posts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [t, API_BASE_URL]);

  const categories = [
    { id: 'all', name: t('blog_page.categories.all_articles') },
    { id: 'trends', name: t('blog_page.categories.trends') },
    { id: 'advice', name: t('blog_page.categories.advice') },
    { id: 'projects', name: t('blog_page.categories.projects') },
    { id: 'technical', name: t('blog_page.categories.technical') }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-off-white flex items-center justify-center">
        <p className="text-anthracite">{t('blog_page.loading_articles')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 bg-off-white flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

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
                {t('blog_page.hero.back_to_home')}
              </Link>
            </div>
            
            <h1 className="font-unbounded text-4xl md:text-6xl font-bold mb-6">
              {t('blog_page.hero.title')}
            </h1>
            <p className="font-manrope text-xl text-off-white max-w-2xl">
              {t('blog_page.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('blog_page.filters.search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-elegant-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-elegant-gold text-deep-black'
                        : 'bg-white text-anthracite hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link 
                  to={`/blog/${article.id}`}
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={article.image_url ? article.image_url : 'https://via.placeholder.com/400x250?text=No+Image'}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="mb-4">
                        {console.log('DEBUG - Article Category ID:', article.category, '| Categories Array:', categories, '| Found Category Object:', categories.find(cat => cat.id === article.category))}
                        <span className="bg-elegant-gold text-deep-black px-3 py-1 rounded-full font-semibold text-xs">
                          {categories.find(cat => cat.id === article.category)?.name || article.category} {/* Fallback to raw category if translation fails */}
                        </span>
                      </div>
                      {/* Placeholder for readTime, not directly available from backend now */}
                      {/* <span>{article.readTime}</span> */}

                      <h3 className="font-unbounded text-xl font-semibold text-deep-black mb-3 group-hover:text-elegant-gold transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      {article.subtitle && (
                        <p className="text-anthracite mb-4 leading-relaxed line-clamp-2">
                          {article.subtitle}
                        </p>
                      )}

                      {/* Author and Date */}
                      <div className="flex items-center gap-3 text-sm text-gray-500 mt-4">
                        <User className="w-4 h-4" />
                        <span>{t('blog_page.author_label')}: {article.author}</span>
                        <Calendar className="w-4 h-4 ml-2" />
                        <span>{t('blog_page.date_label')}: {new Date(article.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div className="flex justify-end mt-auto">
                      <button className="text-elegant-gold hover:text-elegant-gold/80 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="font-manrope text-xl text-anthracite">
                  {t('blog_page.no_articles_found')}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
 
    </div>
  );
};

export default Blog;