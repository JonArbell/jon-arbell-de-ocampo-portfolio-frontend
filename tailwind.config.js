/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Default font for body text
        heading: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}

