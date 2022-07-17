/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
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
  plugins: [],
}
