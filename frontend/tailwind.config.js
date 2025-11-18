/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#885a43",
        "primary-50": "#F7F1EE",
        "primary-100": "#EEE3DD",
        "primary-200": "#DDC6BB",
        "primary-300": "#CDAA98",
        "primary-400": "#BC8D76",
        "primary-600": "#895A43",
        "primary-700": "#674432",
        "primary-800": "#442D22",
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
