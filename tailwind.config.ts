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
        green: {
          apple: '#76BC43',
          light: '#E8F5E9',
          mid:   '#81C784',
          dark:  '#2E7D32',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
