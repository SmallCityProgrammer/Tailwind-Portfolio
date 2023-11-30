/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/*.js",
    "./node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin'),
    require('preline/plugin')],
    
}

