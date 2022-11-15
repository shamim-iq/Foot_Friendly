/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl_screen': {'max': '1200px'},
      'l_screen': {'max': '991px'},
      'm_screen': {'max': '767px'},
      's_screen': {'max': '550px'},
      'xs_screen': {'max': '357px'}
    }
  },
  plugins: [],
}