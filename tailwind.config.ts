import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F8F7F4',
        primary: '#606F49',
        accent: '#728359',
        secondary: '#849669',
        ink: '#2B2B2B'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        paper: '0 14px 40px rgba(43, 43, 43, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
