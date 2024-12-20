import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#8ED2FF',
          dark1: '#4885A4',
          dark2: '#002F47',
        },
        green: {
          light1: '#BFFF92',
          light2: '#A1E197',
          light3: '#B4C29B',
          dark1: '#66A4A0',
          dark2: '#439400',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
