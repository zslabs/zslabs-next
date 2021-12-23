/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      backgroundSize: {
        '0/6': '0% 6px',
        '100/6': '100% 6px',
        'auto/6': 'auto 6px',
      },
      borderColor: {
        current: 'currentColor',
      },
      boxShadow: {
        solid: '0 0 0 2px currentColor',
      },
      fontFamily: {
        sans: ['ZS Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '25vw': '25vw',
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
        '1/2': '0.5fr',
        '3/4': '0.75fr',
      },
      height: {
        0.5: '0.125rem',
      },
      margin: {
        '-1/2-screen': '-50vw',
      },
      minHeight: {
        32: '8rem',
      },
      maxHeight: {
        120: '30rem',
      },
      letterSpacing: {
        tight: '-.0125em',
      },
      scale: {
        1: '1',
      },
      skew: {
        8: '8deg',
      },
      transitionProperty: {
        'background-size': 'background-size',
      },
      transitionTimingFunction: {
        iOS: 'cubic-bezier(0.36, 0.66, 0.04, 1)',
      },
      width: {
        0.5: '0.125rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './media/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.filter-invert': {
          filter: 'invert(1)',
        },

        '.gradient-mask-b-0': {
          'mask-image': 'linear-gradient(180deg, #000 0, transparent)',
        },

        '.underline': {
          'text-decoration': 'underline',
          'text-decoration-skip-ink': 'auto',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
