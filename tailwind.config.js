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
    extend: {
      animation: {
        'like': 'scale-up-down .4s cubic-bezier(0.390, 0.575, 0.565, 1.000);',
      },
      keyframes: {
        "scale-up-down": {
          '0%': { transform: "scale(1)" },
          '60%': { transform: "scale(1.5)" },
          '100%': { transform: "scale(1)" },
        },
      }
    },
    screens: {
      sm: { min: "450px" },
      md: { min: "876px" },
      lg: { min: "1000px" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
