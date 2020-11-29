/* eslint-disable global-require */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // 'media' when in prod
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ['ZS Sans', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
        '3/4': '0.75fr',
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
      scale: ['group-hover'],
    },
  },
  plugins: [
    plugin(({ addBase, config }) => {
      addBase({
        h1: {
          letterSpacing: config('theme.letterSpacing.tight'),
        },
        h2: {
          letterSpacing: config('theme.letterSpacing.tight'),
        },
        h3: {
          letterSpacing: config('theme.letterSpacing.tight'),
        },
      })
    }),
  ],
}
