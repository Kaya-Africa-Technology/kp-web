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
        lightGray: "#F7F7F7"
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
