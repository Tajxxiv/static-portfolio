/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: '#23252C',
        darkBlue: '#1A1B21',
        bodyBlue: '#5093E2',
        specialColor: '#F3BF99',
        headingWhite: '#F5F5F5',
        bodyGray: '#DCDCDC',
        iconColor: '#918E9B',
        footerColor: '#161619'
      },
      fontFamily: {
        'inter': ['"Inter"','sans-serif']
      }
    },
  },
  plugins: [],
}
