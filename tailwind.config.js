/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // O roxo vibrante da sua marca
        primary: "#7C3AED", 
        // Cinzas sofisticados para o fundo
        background: "#F8FAFC",
      },
    },
  },
  plugins: [],
};