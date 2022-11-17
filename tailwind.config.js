/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "rock-blue": {
          50: "#fafbfc",
          100: "#f6f7f9",
          200: "#e8ebf1",
          300: "#dbdee8",
          400: "#bfc6d6",
          500: "#a4adc5",
          600: "#949cb1",
          700: "#7b8294",
          800: "#626876",
          900: "#505561",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
