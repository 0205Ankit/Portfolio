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
      colors: {
        main: "#BA33FF",
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
      },
      animation: {
        cycle: "cycle 5000ms linear infinite",
        lay1: "lay 500ms ease-in",
        lay2: "lay 600ms ease-in",
        lay3: "lay 700ms ease-in",
        lay4: "lay 800ms ease-in",
        fadeIn: "fadeIn 1000ms ease-in",
        fadeUp1: "fadeUp 500ms ease-in",
        fadeUp2: "fadeUp 600ms ease-in",
        fadeUp3: "fadeUp 700ms ease-in",
        fadeUp4: "fadeUp 800ms ease-in",
        fadeUp5: "fadeUp 900ms ease-in",
      },
    },
  },
  plugins: [],
};
