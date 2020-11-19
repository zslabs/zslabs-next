const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['ZS Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
