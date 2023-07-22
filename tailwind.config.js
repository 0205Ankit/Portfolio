/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        neon: "0 0 10px theme('colors.gray.300'), 3px 3px 40px theme('colors.gray.500')",
      },
      colors: {
        main: "#BA33FF",
        darkGrey: "#212121",
      },
      keyframes: {
        cycle: {
          "0%": {
            transform: "translateY(0px)",
          },
          "10%": {
            transform: "translateY(-45px)",
          },
          "20%": {
            transform: "translateY(-45px)",
          },
          "30%": {
            transform: "translateY(-95px)",
          },
          "40%": {
            transform: "translateY(-95px)",
          },
          "50%": {
            transform: "translateY(-145px)",
          },
          "60%": {
            transform: "translateY(-145px)",
          },
          "70%": {
            transform: "translateY(-190px)",
          },
          "80%": {
            transform: "translateY(-190px)",
          },
          "90%": {
            transform: "translateY(-240px)",
          },
          "100%": {
            transform: "translateY(-240px)",
          },
        },
        lay: {
          from: {
            transform: "translateY(-50px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadeUp: {
          from: {
            opacity: 0,
            transform: "translateY(70px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideInFromLeft: {
          from: {
            opacity: 0,
            transform: "translateX(-100px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        slideInFromRight: {
          from: {
            opacity: 0,
            transform: "translateX(100px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        cycle: "cycle 5000ms linear infinite",
        lay1: "lay 500ms ease-in",
        lay2: "lay 600ms ease-in",
        lay3: "lay 700ms ease-in",
        lay4: "lay 800ms ease-in",
        fadeIn: "fadeIn 1200ms ease-in",
        fadeUp1: "fadeUp 700ms ease-in",
        fadeUp2: "fadeUp 800ms ease-in",
        fadeUp3: "fadeUp 900ms ease-in",
        fadeUp4: "fadeUp 1000ms ease-in",
        fadeUp5: "fadeUp 1100ms ease-in",
        slideLeft1: "slideInFromLeft 800ms ease-in",
        slideLeft2: "slideInFromLeft 900ms ease-in",
        slideLeft3: "slideInFromLeft 1000ms ease-in",
        slideLeft4: "slideInFromLeft 1100ms ease-in",
        slideLeft5: "slideInFromLeft 1200ms ease-in",
        slideRight1: "slideInFromRight 800ms ease-in",
        slideRight2: "slideInFromRight 900ms ease-in",
        slideRight3: "slideInFromRight 1000ms ease-in",
        slideRight4: "slideInFromRight 1100ms ease-in",
        slideRight5: "slideInFromRight 1200ms ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
