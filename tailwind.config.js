/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// Calculates ideal letterSpacing for a given font size
function dynamicTracking(fontSize) {
  const a = -0.0223
  const b = 0.135 // 0.185 default
  const c = -0.1745
  // tracking = a + b * e ^ (c * fontSize)
  const value = a + b * Math.E ** (c * (fontSize * 16))

  return `${value.toFixed(3)}em`
}

module.exports = {
  darkMode: 'class',
  theme: {
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
      borderRadius: {
        conditional: 'max(0px, min(12px, calc((100vw - 6px - 100%) * 9999)))',
      },
      boxShadow: {
        solid: '0 0 0 2px currentColor',
      },
      fontFamily: {
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
    plugin(({ addUtilities }) => {
      addUtilities({
        '.gradient-mask-b-0': {
          'mask-image': 'linear-gradient(180deg, #000 0, transparent)',
        },
      })
    }),
    require('@tailwindcss/line-clamp'),
  ],
}
