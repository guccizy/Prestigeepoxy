import React, { useState, useEffect } from 'react';
import { HardHat, PaintRoller, Sparkles, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FinitionsSection = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);
  const { t } = useTranslation();

  const animationSequences = {
    crackFiller: { frames: 9, basePath: '/images/animation/crack-filler/frame_' },
    primer: { frames: 17, basePath: '/images/animation/primer/frame_' },
    epoxyMetallique: { frames: 11, basePath: '/images/animation/epoxy-metalique/frame_' },
  };

  const totalFrames = Object.values(animationSequences).reduce((sum, seq) => sum + seq.frames, 0);
  const frameSequenceMap = [];
  let frameCount = 0;
  for (const key in animationSequences) {
    for (let i = 0; i < animationSequences[key as keyof typeof animationSequences].frames; i++) {
      frameSequenceMap.push({
        sequence: key,
        frameNum: i + 1,
        path: `${animationSequences[key as keyof typeof animationSequences].basePath}${i + 1}.png`,
      });
    }
  }

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imagePromises = frameSequenceMap.map((frameData) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = frameData.path;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalFrames) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          console.error(t('finitions_section.image_load_error', { path: frameData.path }));
          resolve(); // Resolve even on error to not block loading
        };
      });
    });

    Promise.all(imagePromises);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const viewportHeight = window.innerHeight;
      const stickyImageContainer = sectionRef.current.querySelector('.sticky') as HTMLElement;
      if (!stickyImageContainer) return;
      const stickyElementHeight = stickyImageContainer.offsetHeight; // This should be 100vh now
      const sectionOffsetTop = sectionRef.current.offsetTop;
      const animationWrapperHeight = sectionRef.current.offsetHeight; // This is 200vh

      // Animation starts when the top of the sectionRef (200vh container) hits the top of the viewport.
      // Since the sticky element is now h-screen and top-0, it will be centered by flex when this happens.
      const startPinningScroll = sectionOffsetTop; 

      // The animation ends when the bottom of the sectionRef (200vh container) leaves the viewport.
      const endPinningScroll = sectionOffsetTop + animationWrapperHeight - viewportHeight;
      
      const currentScrollY = window.scrollY;

      let scrollProgress = 0;

      if (currentScrollY <= startPinningScroll) {
        scrollProgress = 0;
      } else if (currentScrollY >= endPinningScroll) {
        scrollProgress = 1;
      } else {
        scrollProgress = (currentScrollY - startPinningScroll) / (endPinningScroll - startPinningScroll);
      }

      let newFrame = Math.min(Math.floor(scrollProgress * totalFrames), totalFrames - 1);
      setCurrentFrame(newFrame);

      console.log(t('finitions_section.scroll_debug_message'));
      console.log(t('finitions_section.scroll_debug_scrollY'), currentScrollY);
      console.log(t('finitions_section.scroll_debug_sectionOffsetTop'), sectionOffsetTop);
      console.log(t('finitions_section.scroll_debug_stickyElementHeight'), stickyElementHeight);
      console.log(t('finitions_section.scroll_debug_animationWrapperHeight'), animationWrapperHeight);
      console.log(t('finitions_section.scroll_debug_startPinningScroll'), startPinningScroll);
      console.log(t('finitions_section.scroll_debug_endPinningScroll'), endPinningScroll);
      console.log(t('finitions_section.scroll_debug_scrollProgress'), scrollProgress);
      console.log(t('finitions_section.scroll_debug_currentFrame'), newFrame);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="finitions" className="py-20 bg-deep-black">
      {/* Main Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-unbounded text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight px-4">
            {t('finitions_section.main_title')}
          </h2>
        </div>
      </div>

      {/* Types de finitions - This will now be pushed down correctly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-20 mt-20">
          <div className="text-center mb-12">
            <h3 className="font-unbounded text-2xl md:text-3xl font-light text-white mb-4">
              {t('finitions_section.process_title')}
            </h3>
            <p className="font-unbounded text-lg text-white/70 max-w-2xl mx-auto mb-12">
              {t('finitions_section.process_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-deep-black/20 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-elegant-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardHat className="w-8 h-8 text-elegant-gold" />
              </div>
              <h4 className="font-unbounded text-xl font-light text-white mb-3">{t('finitions_section.steps.step1_title')}</h4>
              <p className="font-unbounded text-base text-white/70">
                {t('finitions_section.steps.step1_description')}
              </p>
            </div>
            <div className="bg-deep-black/20 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-elegant-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PaintRoller className="w-8 h-8 text-elegant-gold" />
              </div>
              <h4 className="font-unbounded text-xl font-light text-white mb-3">{t('finitions_section.steps.step2_title')}</h4>
              <p className="font-unbounded text-base text-white/70">
                {t('finitions_section.steps.step2_description')}
              </p>
            </div>
            <div className="bg-deep-black/20 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-elegant-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-elegant-gold" />
              </div>
              <h4 className="font-unbounded text-xl font-light text-white mb-3">{t('finitions_section.steps.step3_title')}</h4>
              <p className="font-unbounded text-base text-white/70">
                {t('finitions_section.steps.step3_description')}
              </p>
            </div>
            <div className="bg-deep-black/20 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-elegant-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-elegant-gold" />
              </div>
              <h4 className="font-unbounded text-xl font-light text-white mb-3">{t('finitions_section.steps.step4_title')}</h4>
              <p className="font-unbounded text-base text-white/70">
                {t('finitions_section.steps.step4_description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Animation Wrapper */}
      <div ref={sectionRef} className="relative h-[200vh]"> {/* This defines the total scrollable animation space */} 
        {/* The actual sticky image container */} 
        <div className="sticky top-0 h-screen w-full max-w-4xl mx-auto aspect-video rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center">
          {imagesLoaded ? (
            <img 
              src={frameSequenceMap[currentFrame]?.path || 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=1600'}
              alt={t('finitions_section.animation_alt_text')}
              className="w-full h-full object-cover absolute inset-0"
            />
          ) : (
            <p className="text-white text-xl flex items-center justify-center h-full">{t('finitions_section.loading_animations')}</p>
          )}
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/30 via-transparent to-transparent z-10"></div>

          {/* Overlay to darken the image slightly for text readability */}
          <div className="absolute inset-0 bg-deep-black/20 z-10"></div>
        </div>
        {/* Invisible spacer to push content below, creating scrollable animation duration */}
        <div className="h-[100vh]"></div>
      </div>

      {/* Text after sticky animation */}
      
    </section>
  );
};

export default FinitionsSection;