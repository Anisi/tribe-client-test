module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto,Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {},
    screens: {
      sm: { min: "450px" },
      md: { min: "876px" },
      lg: { min: "1000px" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
