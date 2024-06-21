/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      customTealDark: '#08838C',
      customTealLight: '#66D0A4',
    },},
  },
  plugins: [],
}