/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Default font for body text
        heading: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'] 
      },
      screens: {
        xs: '360px',  // Extra small screens
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl' : '1366px',
        '3xl': '1536px',
      }
    },
  },
  plugins: [],
}

