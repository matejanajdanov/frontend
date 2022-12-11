/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        moveInLeft: {
          "0%": { opacity: "0", transform: " translateX(-10rem)" },
          "100%": { opacity: "1", transform: " translate(0)" },
        },
        moveInRight: {
          "0%": { opacity: "0", transform: " translateX(10rem)" },
          "100%": { opacity: "1", transform: " translate(0)" },
        },
        moveInUp: {
          "0%": { opacity: "0", transform: " translateY(10rem)" },
          "100%": { opacity: "1", transform: " translate(0)" },
        },
      },
      animation: {
        moveInLeft: "moveInLeft 1s ease-in-out",
        moveInRight: "moveInLeft 1s ease-in-out",
        moveInUp: "moveInLeft 1s ease-in-out",
      },
      colors: {
        primary: "#0B82B8",
        primaryDark: "#0b4470",
        secondary: "#FDC418",
        secondaryDark: "#F68C20",
        tertiary: "#A4CA39",
        tertiaryDark: "#55AE42",
      },
    },
  },
  plugins: [],
};
