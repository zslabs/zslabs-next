/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class', // 'media' when in prod
  theme: {
    filter: {
      'gray-100':
        'brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(1904%) hue-rotate(179deg) brightness(99%) contrast(95%)',
      'gray-900':
        'brightness(0) saturate(100%) invert(6%) sepia(34%) saturate(1168%) hue-rotate(183deg) brightness(96%) contrast(93%)',
      none: 'none',
    },
    extend: {
      fontFamily: {
        sans: ['ZS Sans', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      transitionProperty: {
        filter: 'filter',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
      },
      zIndex: {
        '-1': '-1',
      },
    },
    purge: [
      './components/**/*.{js,ts,jsx,tsx}',
      './layouts/**/*.{js,ts,jsx,tsx}',
      './media/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
      filter: ['group-hover'],
    },
  },
  plugins: [require('tailwindcss-filters')],
}
