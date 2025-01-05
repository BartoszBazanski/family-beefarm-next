import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        lato: ['var(--font-lato)', ...fontFamily.sans],
        playfair: ['var(--font-playfair)', ...fontFamily.serif],
      },
      spacing: {
        18: '4.5rem',
      },
      colors: {
        accent: {
          DEFAULT: '#7C9B72'
        },
        primary: {
          DEFAULT: '#634B33',
          100: '#FDF6E9',
          300: '#D4B08C',
          500: '#634B33'
        },
        secondary: {
          DEFAULT: '#D9A404',
          100: '#FFF7E5',
          200: '#FFEDB8',
          300: '#FFE08A',
          400: '#FFCE5C',
          500: '#F2B705',
          600: '#D9A404',
          700: '#BF8F04',
          800: '#A67B03',
          900: '#8C6803',
        },
      }
    },
  },
  plugins: [],
}
export default config
