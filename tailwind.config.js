/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        authentic: {
          peach: "#F5BAAF",
          pink: "#DF6E94",
          purple: "#563A88",
          deep: "#8F468A",
          black: "#070507",
        },
      },
    },
  },
  plugins: [],
};