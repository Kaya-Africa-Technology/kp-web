/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#1d1d1d",
        gray: "#696767",
        lightGray: "#F7F7F7",
        darkGray: "#28292A",
        extraLightGray: "#D9D9D9"
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
