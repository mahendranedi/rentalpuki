/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      width: '85%',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#40CD80",
        secondary: "#F5FFFA",
        third: "#202342",
        button: "#464545",
      },
    },
  },
  plugins: [],
}

