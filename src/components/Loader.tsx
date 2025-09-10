import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-deep-black z-50 flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/loader-bg.webm"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo and title */}
        <div className="mb-8 flex flex-col items-center">
          <img src="/logo/logo.png" alt="Prestige Epoxy Logo" className="h-32 w-auto mb-4" />
          <h1 className="font-unbounded text-4xl md:text-5xl font-light text-white mb-4">
            PRESTIGE <span className="text-elegant-gold font-unbounded">EPOXY</span>
          </h1>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-elegant-gold to-transparent mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-white/50 animate-[loading_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* Spinner élégant */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-elegant-gold/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-elegant-gold border-r-elegant-gold/50 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-2 border-transparent border-t-white/30 rounded-full animate-spin animate-reverse"></div>
        </div>

        <p className="font-manrope text-white text-lg animate-pulse">
          Préparation de votre expérience premium...
        </p>
      </div>

    </div>
  );
};

export default Loader;