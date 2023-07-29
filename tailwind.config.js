/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        no1: "#D8A477",
        no2: "#AF7F54",
        no3: "#885B32",
        no4: "#613A12",
        no5: "#3E1B00",
      },
      fontFamily: {
        baseFont: ["Domine", "serif"],
      },
    },
  },
  plugins: [],
};
