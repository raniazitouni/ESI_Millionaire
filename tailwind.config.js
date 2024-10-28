/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        impact: ["Impact", "sans-serif"],
      },
      colors: {
        "custom-black": "#010101",
        "light-gold": "#FFFFAA",
        "custom-white": "#FFFFFA",
        "custom-gold": "#E1AB39",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(182.15deg, #E9C156 11.09%, #FFFFAA 29.64%, #E1AB39 57.47%, #E9C156 94.57%)",
      },
    },
  },
  plugins: [],
};
