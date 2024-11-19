/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'controlG': ['controlG', 'sans-serif'], // El nombre que usaste en @font-face
      },
    },
  },
  plugins: [],
}

