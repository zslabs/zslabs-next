/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    filter: {
      invert: 'invert(1)',
    },
    extend: {
      backdropFilter: {
        blur: 'blur(5px)',
      },
      backgroundSize: {
        '0/8': '0% 8px',
        '100/8': '100% 8px',
        'auto/8': 'auto 8px',
      },
      borderColor: {
        current: 'currentColor',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        cyan: colors.cyan,
        orange: colors.orange,
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
      strokeWidth: {
        1.5: '1.5',
      },
      transitionProperty: {
        'background-size': 'background-size',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
      },
      width: {
        0.5: '0.125rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './layouts/**/*.{js,ts,jsx,tsx}',
      './media/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      fontFace: false,
    },
  },
  variants: {
    filter: ['dark'],
    extend: {
      backgroundOpacity: ['dark'],
      backgroundSize: ['hover'],
      scale: ['group-hover'],
      boxShadow: ['dark'],
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('@tailwindcss/forms'),
    require('tailwind-gradient-mask-image'),
  ],
}
