/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   "primary-color": "#885a43",
      //   "primary-50": "#F7F1EE",
      //   "primary-100": "#EEE3DD",
      //   "primary-200": "#DDC6BB",
      //   "primary-300": "#CDAA98",
      //   "primary-400": "#BC8D76",
      //   "primary-600": "#895A43",
      //   "primary-700": "#674432",
      //   "primary-800": "#442D22",
      //   "secondary-color": "#F8F7F1",
      // },
      colors: {
        "primary-color": "#885A43",
        "primary-50": "#F7F1EE",
        "primary-100": "#EEE3DD",
        "primary-200": "#DDC6BB",
        "primary-300": "#CDAA98",
        "primary-400": "#BC8D76",
        "primary-600": "#895A43",
        "primary-700": "#674432",
        "primary-800": "#442D22",

        "secondary-color": "#CAB36C",
        "secondary-50": "#F8F5EC",
        "secondary-100": "#F1EBDA",
        "secondary-200": "#E4D8B4",
        "secondary-300": "#D6C48F",
        "secondary-400": "#C9B169",
        "secondary-600": "#967E36",
        "secondary-700": "#705E29",
        "secondary-800": "#4B3F1B",
        "secondary-900": "#251F0E ",
      },
      fontFamily: {
        headingFont: ["Outfit", "sans-serif"],
        paraFont: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(105.17deg, #251611 -25.01%, #FFCA97 42.41%, #251611 121.11%)",
        "dark-overlay":
          "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.65))",
      },
    },
  },
  plugins: [],
};
