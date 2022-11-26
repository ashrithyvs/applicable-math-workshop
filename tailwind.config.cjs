/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      slate: colors.slate,
      primary: "#E5EDDE",
      "primary-hover": "#c40e17",
      secondary: "#2E4129",
      "secondary-hover": "#4e4f52",
      "nature-green": "#2E4129",
      card: "#26292D",
      transparent: "rgb(0,0,0,0)",
    },
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1536px",
        "4xl": "1700px",
      },
    },
  },
  plugins: [],
};
