/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#047AF8",
        "secondary-color": "#F8F7F1",
      },
      fontFamily: {
        headingFont: ["Outfit", "sans-serif"],
        paraFont: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
