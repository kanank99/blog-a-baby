/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      landingbg: "#EFF3F1",
      teal: "#115E59",
    },
    fontFamily: {
      serif: ["Gilda Display", "serif"],
      sans: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
