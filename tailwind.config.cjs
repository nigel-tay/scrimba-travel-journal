/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
      },
      colors: {
        'textBlack': '#2B283A',
        'main-red': '#F55A5A',
        'link-grey': '#918E9B'
      },
      spacing: {
        '550': '550px',
      }
    },
  },
  plugins: [],
}
