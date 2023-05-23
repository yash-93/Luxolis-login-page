/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxolis-blue': '#2148C0',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      width: {
        '75': '300px'
      },
      boxShadow: {
        'luxolis-shadow': '0px 4px 4px rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'background-texture': "url('/src/static/BG.svg')"
      }
    },
  },
  plugins: [],
}
