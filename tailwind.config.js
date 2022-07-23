/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// Calculates ideal letterSpacing for a given font size
function dynamicTracking(fontSize) {
  const a = -0.0223
  const b = 0.0 // 0.185 default
  const c = -0.1745
  // tracking = a + b * e ^ (c * fontSize)
  const value = a + b * Math.E ** (c * (fontSize * 16))

  return `${value.toFixed(3)}em`
}

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        1: 'var(--blue1)',
        2: 'var(--blue2)',
        3: 'var(--blue3)',
        4: 'var(--blue4)',
        5: 'var(--blue5)',
        6: 'var(--blue6)',
        7: 'var(--blue7)',
        8: 'var(--blue8)',
        9: 'var(--blue9)',
        10: 'var(--blue10)',
        11: 'var(--blue11)',
        12: 'var(--blue12)',
      },
      secondary: {
        1: 'var(--green1)',
        2: 'var(--green2)',
        3: 'var(--green3)',
        4: 'var(--green4)',
        5: 'var(--green5)',
        6: 'var(--green6)',
        7: 'var(--green7)',
        8: 'var(--green8)',
        9: 'var(--green9)',
        10: 'var(--green10)',
        11: 'var(--green11)',
        12: 'var(--green12)',
      },
      warning: {
        1: 'var(--yellow1)',
        2: 'var(--yellow2)',
        3: 'var(--yellow3)',
        4: 'var(--yellow4)',
        5: 'var(--yellow5)',
        6: 'var(--yellow6)',
        7: 'var(--yellow7)',
        8: 'var(--yellow8)',
        9: 'var(--yellow9)',
        10: 'var(--yellow10)',
        11: 'var(--yellow11)',
        12: 'var(--yellow12)',
      },
      accent: {
        1: 'var(--violet1)',
        2: 'var(--violet2)',
        3: 'var(--violet3)',
        4: 'var(--violet4)',
        5: 'var(--violet5)',
        6: 'var(--violet6)',
        7: 'var(--violet7)',
        8: 'var(--violet8)',
        9: 'var(--violet9)',
        10: 'var(--violet10)',
        11: 'var(--violet11)',
        12: 'var(--violet12)',
      },
      danger: {
        1: 'var(--tomato1)',
        2: 'var(--tomato2)',
        3: 'var(--tomato3)',
        4: 'var(--tomato4)',
        5: 'var(--tomato5)',
        6: 'var(--tomato6)',
        7: 'var(--tomato7)',
        8: 'var(--tomato8)',
        9: 'var(--tomato9)',
        10: 'var(--tomato10)',
        11: 'var(--tomato11)',
        12: 'var(--tomato12)',
      },
      slate: {
        1: 'var(--slate1)',
        2: 'var(--slate2)',
        3: 'var(--slate3)',
        4: 'var(--slate4)',
        5: 'var(--slate5)',
        6: 'var(--slate6)',
        7: 'var(--slate7)',
        8: 'var(--slate8)',
        9: 'var(--slate9)',
        10: 'var(--slate10)',
        11: 'var(--slate11)',
        12: 'var(--slate12)',
      },
      whiteA: {
        1: 'var(--whiteA1)',
        2: 'var(--whiteA2)',
        3: 'var(--whiteA3)',
        4: 'var(--whiteA4)',
        5: 'var(--whiteA5)',
        6: 'var(--whiteA6)',
        7: 'var(--whiteA7)',
        8: 'var(--whiteA8)',
        9: 'var(--whiteA9)',
        10: 'var(--whiteA10)',
        11: 'var(--whiteA11)',
        12: 'var(--whiteA12)',
      },
      blackA: {
        1: 'var(--blackA1)',
        2: 'var(--blackA2)',
        3: 'var(--blackA3)',
        4: 'var(--blackA4)',
        5: 'var(--blackA5)',
        6: 'var(--blackA6)',
        7: 'var(--blackA7)',
        8: 'var(--blackA8)',
        9: 'var(--blackA9)',
        10: 'var(--blackA10)',
        11: 'var(--blackA11)',
        12: 'var(--blackA12)',
      },
    },
    fontSize: {
      xs: [
        '0.75rem',
        { lineHeight: '1rem', letterSpacing: dynamicTracking(0.75) },
      ],
      sm: [
        '0.875rem',
        { lineHeight: '1.25rem', letterSpacing: dynamicTracking(1.25) },
      ],
      base: [
        '1rem',
        { lineHeight: '1.5rem', letterSpacing: dynamicTracking(1) },
      ],
      lg: [
        '1.125rem',
        { lineHeight: '1.75rem', letterSpacing: dynamicTracking(1.125) },
      ],
      xl: [
        '1.25rem',
        { lineHeight: '1.75rem', letterSpacing: dynamicTracking(1.75) },
      ],
      '2xl': [
        '1.5rem',
        { lineHeight: '2rem', letterSpacing: dynamicTracking(1.5) },
      ],
      '3xl': [
        '1.875rem',
        { lineHeight: '2.25rem', letterSpacing: dynamicTracking(1.875) },
      ],
      '4xl': [
        '2.25rem',
        { lineHeight: '2.5rem', letterSpacing: dynamicTracking(2.25) },
      ],
      '5xl': ['3rem', { lineHeight: '1', letterSpacing: dynamicTracking(2.3) }],
      '6xl': [
        '3.75rem',
        { lineHeight: '1', letterSpacing: dynamicTracking(3.75) },
      ],
      '7xl': [
        '4.5rem',
        { lineHeight: '1', letterSpacing: dynamicTracking(4.5) },
      ],
      '8xl': ['6rem', { lineHeight: '1', letterSpacing: dynamicTracking(6) }],
      '9xl': ['8rem', { lineHeight: '1', letterSpacing: dynamicTracking(9) }],
    },
    extend: {
      backgroundSize: {
        '0/6': '0% 6px',
        '100/6': '100% 6px',
        'auto/6': 'auto 6px',
      },
      borderColor: {
        current: 'currentColor',
      },
      fontFamily: {
        heading: ['Clash Display', ...defaultTheme.fontFamily.sans],
        sans: ['ZS Sans', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
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
        bounce: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
      },
      width: {
        0.5: '0.125rem',
      },
      zIndex: {
        '-1': '-1',
        1: '1',
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
    require('@tailwindcss/line-clamp'),
    plugin(({ addVariant, addUtilities }) => {
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('group-hocus', ['.group:hover &', '.group:focus &'])

      addUtilities({
        '.gradient-mask-b-0': {
          'mask-image': 'linear-gradient(180deg, #000 0, transparent)',
        },
        '.dots-bg': {
          'background-image': `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23222' fill-opacity='0.0725' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E%0A")`,
          'background-size': 'auto 6px',
        },
        '.dots-bg-invert': {
          'background-image': `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.125' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E%0A")`,
          'background-size': 'auto 6px',
        },
      })
    }),
    require('@tailwindcss/line-clamp'),
  ],
}
