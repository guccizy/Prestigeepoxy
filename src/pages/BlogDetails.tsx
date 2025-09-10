import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';

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

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/blog/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(t('blog_details_page.not_found'));
          } else {
            throw new Error(t('blog_details_page.fetch_error'));
          }
        }
        const data: BlogPost = await response.json();
        setPost(data);
      } catch (err: any) {
        console.error('Error fetching blog post:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id, t, API_BASE_URL]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-off-white flex items-center justify-center">
        <p className="text-anthracite">{t('blog_details_page.loading')}</p>
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

  if (!post) {
    return (
      <div className="min-h-screen pt-20 bg-off-white flex items-center justify-center">
        <p className="text-anthracite">{t('blog_details_page.not_found')}</p>
      </div>
    );
  }

  const createdAtDate = new Date(post.created_at).toLocaleDateString();

  return (
    <div className="font-manrope">
      <main className="pt-20 min-h-screen bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-anthracite hover:text-elegant-gold transition-colors font-manrope"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('blog_details_page.back_to_blog')}
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {post.image_url && (
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-auto rounded-lg mb-8 object-cover max-h-96"
              />
            )}

            <p className="text-sm text-gray-500 mb-2">{t('blog_details_page.category_label')}: {t(`blog_page.categories.${post.category}`)}</p>
            <h1 className="font-unbounded text-4xl font-bold text-elegant-gold mb-4">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="font-manrope text-xl text-anthracite mb-4">
                {post.subtitle}
              </p>
            )}
            <p className="text-sm text-gray-600 mb-6">
              {t('blog_details_page.author_label')}: {post.author} - {createdAtDate}
            </p>

            <div className="overflow-x-auto">
              <div
                className="prose prose-lg !max-w-full text-anthracite leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
