/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'anthracite': '#1a1a1a',
        'elegant-gold': '#c9a961',
        'luxury-gold': '#f4e4bc',
        'platinum': '#e5e4e2',
        'charcoal': '#2c2c2c',
        'off-white': '#1c1c1c',
        'cream': '#f5f5f0',
        'midnight': '#0f0f0f',
        'marble-white': '#f8f8f8',
        'dark-marble': '#0a0a0a',
        'darker-gray': '#141414',
        'gold-accent': '#d4af37',
        'off-white': '#f8f8f8',
      },
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'gold': '0 10px 40px rgba(201, 169, 97, 0.3)',
        'subtle-gold-glow': '0 0 10px rgba(201, 169, 97, 0.4)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'parallax': 'parallax 20s linear infinite',
        'slide': 'slide 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'loading': 'loading 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'luxury-fade': 'luxuryFade 1.2s ease-out',
        'subtle-glow': 'subtleGlow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-20px)' },
        },
        slide: {
          '0%, 100%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '50%': { transform: 'translateX(100vw) skewX(-12deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(201, 169, 97, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 169, 97, 0.6)' },
        },
        luxuryFade: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        subtleGlow: {
          '0%': { boxShadow: '0 0 10px rgba(201, 169, 97, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(201, 169, 97, 0.3)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};