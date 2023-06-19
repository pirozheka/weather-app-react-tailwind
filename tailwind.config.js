/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'weather-texture': "url('/src/assets/clear-sky-weather.svg')"
      }
    },
  },
  plugins: [],
}

