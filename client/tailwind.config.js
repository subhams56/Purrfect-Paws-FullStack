/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        handwriting: ['Amatic SC', 'cursive'],
        handwriting2: ['Handlee', 'cursive'],
        // Add more font families as needed
      },
    },
  },
  plugins: [],
}