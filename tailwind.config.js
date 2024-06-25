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
      secondary: '#7BC7BF',
      secondary2: '#0075BC',
      secondary3: '#5D96D0',
      bluePrimary:'#25588D',
      greenPrimary: '#008D84'
    },},
  },
  plugins: [],
}