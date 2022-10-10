const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: colors.yellow,
      secondary: colors.purple,
      success: colors.green,
      warning: colors.amber,
      danger: colors.red,
      neutral: colors.gray,
      white: colors.white,
      dark: colors.slate,
    },
    extend: {},
  },
  plugins: [],
};
