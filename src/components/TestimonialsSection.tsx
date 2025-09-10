import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useTranslation(); // Initialize useTranslation

  const testimonials = [
    {
      id: 1,
      quote: t('testimonials_section.testimonial_1.quote'), // Use translation key
      image: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800",
      company: t('testimonials_section.testimonial_1.company'), // Use translation key
      companyLogo: "360", // This could also be a translation key if logos change
      author: t('testimonials_section.testimonial_1.author'), // Use translation key
      position: t('testimonials_section.testimonial_1.position') // Use translation key
    },
    {
      id: 2,
      quote: t('testimonials_section.testimonial_2.quote'),
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      company: t('testimonials_section.testimonial_2.company'),
      companyLogo: "PA",
      author: t('testimonials_section.testimonial_2.author'),
      position: t('testimonials_section.testimonial_2.position')
    },
    {
      id: 3,
      quote: t('testimonials_section.testimonial_3.quote'),
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      company: t('testimonials_section.testimonial_3.company'),
      companyLogo: "LG",
      author: t('testimonials_section.testimonial_3.author'),
      position: t('testimonials_section.testimonial_3.position')
    },
    {
      id: 4,
      quote: t('testimonials_section.testimonial_4.quote'),
      image: "https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=800",
      company: t('testimonials_section.testimonial_4.company'),
      companyLogo: "BL",
      author: t('testimonials_section.testimonial_4.author'),
      position: t('testimonials_section.testimonial_4.position')
    },
    {
      id: 5,
      quote: t('testimonials_section.testimonial_5.quote'),
      image: "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800",
      company: t('testimonials_section.testimonial_5.company'),
      companyLogo: "VM",
      author: t('testimonials_section.testimonial_5.author'),
      position: t('testimonials_section.testimonial_5.position')
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="temoignages" className="py-20 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-unbounded text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            {t('testimonials_section.title_part1')} <span className="text-elegant-gold">{t('testimonials_section.title_part2')}</span>
          </h2>
          <p className="font-manrope text-lg text-white/60">
            {t('testimonials_section.subtitle')}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[16/10] sm:aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden">
              <img 
                src={current.image}
                alt={t('testimonials_section.image_alt', { company: current.company })} // Use translation key with interpolation
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-unbounded font-light text-white leading-tight">
              « {current.quote} »
            </div>

            <div className="space-y-4 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-elegant-gold/20 flex items-center justify-center">
                  <span className="text-elegant-gold font-bold text-base sm:text-lg">
                    {current.companyLogo}
                  </span>
                </div>
                <div className="text-elegant-gold font-manrope font-semibold text-base sm:text-lg tracking-wide">
                  {current.company}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="font-manrope text-lg sm:text-xl text-white font-medium">
                  {current.author}
                </div>
                <div className="font-manrope text-sm sm:text-base text-elegant-gold/80">
                  {current.position}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-elegant-gold scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Testimonials Grid Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentTestimonial
                  ? 'ring-2 ring-elegant-gold scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.image}
                alt={t('testimonials_section.image_alt', { company: testimonial.company })} // Use translation key with interpolation
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;