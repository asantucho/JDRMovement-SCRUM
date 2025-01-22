module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Gilroy', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
          DEFAULT: '#808080', // Brand Tertiary color
        },
        black: {
          DEFAULT: '#232323', // Brand Secondary color (black)
          lighter: '#484848',
          lightest: '#737373',
        },
        // Add brand colors
        primary: {
          DEFAULT: '#ca1245', // Brand Primary color (red-ish)
          100: '#e3a1b4',
          200: '#d17e99',
          300: '#c25a7e',
          400: '#b53764',
          500: '#ca1245', // Original red color
          600: '#a50f3e',
          700: '#8a0c36',
          800: '#6f092e', // Added dark shade (for bg-primary-800)
          900: '#55072a',
        },
        quaternary: {
          DEFAULT: '#ffffff', // Brand Quaternary color (white)
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
