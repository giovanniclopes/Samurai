/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        cpRed: '#B2040B',
        cpDarkRed: '#e40000',
        cpTextColor: '#ca2c00',
        cpBlack: '#000000',
        cpGray: '#131313',
        cpDarkGray: '#363421',
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
