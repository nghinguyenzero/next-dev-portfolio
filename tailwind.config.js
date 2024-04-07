/** @type {import('tailwindcss').Config} */

const  { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors: {
        // name:color
      }
      
    },
  },
  plugins: [],
}

