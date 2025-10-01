/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: {
          100: "#00A6FB",
          200: "#0582CA",
          300: "#006494",
          400: "#003554",
          500: "#051923",
        },
        secondary: {
          100: "#F5F7FA",
          200: "#FF9500",
        },
      },

      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"]
     }
    },
    plugins: [],
  },
};
