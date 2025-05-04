/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/(pages)/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'orbit-cw': 'orbit-rotate-cw 60s linear infinite',
        'orbit-ccw': 'orbit-rotate-ccw 50s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        'orbit-rotate-cw': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-rotate-ccw': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      dropShadow: {
        glow: [
          '0 0 5px rgba(var(--primary-rgb), 0.35)',
          '0 0 10px rgba(var(--primary-rgb), 0.2)',
        ],
      },
    },
  },
  plugins: [],
};
