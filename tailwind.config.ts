import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
      },
      fontFamily: {
        bellefair: ['var(--font-bellefair)'],
        'barlow-condensed': ['var(--font-barlow-condensed))'],
        barlow: ['var(--font-barlow)'],
      },
    },
  },
  plugins: [],
};
export default config;
