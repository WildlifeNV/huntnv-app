const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.{vue,js}'
  ],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.rose,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        carolina: '#589fd6',
        ginger: '#e0dd89',
        almond: '#ffead1',
        oxford: {
          50: '#F0F4FA',
          100: '#e8edf7',
          200: '#b3c5e5',
          300: '#7a9dd1',
          400: '#447ac1',
          500: '#2e598a',
          600: '#294c7a',
          700: '#24406a',
          800: '#1f355b',
          900: '#1b2b4b'
        },
        olive: {
          50: '#fcfdfc',
          100: '#fcfdfc',
          200: '#e1eae3',
          300: '#c3d5c6',
          400: '#a3bda7',
          500: '#7a9e7f',
          600: '#68926e',
          700: '#608666',
          800: '#527558',
          900: '#436049'
        },
        saffron: {
          50: '#fffcfa',
          100: '#fffcfa',
          200: '#fce7d4',
          300: '#f9d1ae',
          400: '#f6b67e',
          500: '#f29645',
          600: '#ef7e1a',
          700: '#db6f0f',
          800: '#ba5e0d',
          900: '#8a460a'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
