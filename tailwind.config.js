/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Define the xs breakpoint for screens smaller than 480px
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        impact: ["Impact", "sans-serif"],
      },
      colors: {
        "custom-black": "#010101",
        "light-gold": "#FFFFAA",
        "custom-white": "#FFFFFA",
        "custom-gold": "#E1AB39",
        "custom-gray": "#6A6A6A",
        "bg-grey": "#FFFFFA1A",
        "custom-gradient":
          "linear-gradient(180deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
        "custom-gradient-sm":
          "linear-gradient(170deg, #E9C156 0%, #FFFFAA 25%, #E1AB39 50%, #E9C156 100%)",
      },
      boxShadow: {
        custom: "34.26px 4px 52.46px 0px #00000014",
      },
    },
  },
  plugins: [],
};
