// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        violet: {
          100: '#EDE9FE',
          400: '#A78BFA',
          700: '#6D28D9',
        },
      },
      fontFamily: {
        titre: ['Oswald'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
