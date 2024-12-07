/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vaporwave: {
          pink: '#FF71CE',
          blue: '#01CDFE',
          purple: '#B967FF',
          yellow: '#FFFB96',
          primary: '#FF71CE',
          secondary: '#01CDFE',
          accent: '#B967FF',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'retro-grid': 'linear-gradient(transparent 0%, rgba(0,0,0,0.5) 100%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 3px, transparent 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.5) 3px, transparent 3px)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'flicker': 'flicker 2s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'flicker': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
    },
  },
  plugins: [],
};