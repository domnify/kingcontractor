/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./dist/**/*.{html,js}"

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}

