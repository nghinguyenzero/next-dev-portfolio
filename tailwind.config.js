/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      keyframes: {
        rubberBand: {
          from: {
            opacity: '0.7',
            transform: "scale3d(1, 1, 1)",
            transform: "translateY(-10%)", //bounce
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)", //bounce
          },

          "30%": {
            // transform: 'scale3d(1.25, 0.75, 1)',
            transform: "scale3d(1.10, 0.9, 1)",
          },

          "40%": {
            // transform: 'scale3d(0.75, 1.25, 1)',
            transform: "scale3d(0.9, 1.1, 1)",
          },

          "50%": {
            opacity: '1',
            // transform: 'scale3d(1.15, 0.85, 1)',
            transform: "scale3d(1.02, 0.98, 1)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)", //bounce
          },

          "65%": {
            // transform: 'scale3d(0.95, 1.05, 1)',
            transform: "scale3d(0.99, 1.01, 1)",
          },
          "75%": {
            opacity: '0.7',
            // transform: 'scale3d(1.05, 0.95, 1)',
            transform: "scale3d(1.01, 0.99, 1)",
          },
          to: {
            opacity: '0.7',
            transform: "scale3d(1, 1, 1)",
            transform: "translateY(-10%)", //bounce
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)", //bounce
          },
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        rubberBand: "rubberBand 1s infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(225,225,225,0.5) 2px, #1b1b1b 5px, #1b1b1b 100px);",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" }, // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" }, // => @media (max-width: 1023px) { ... }
      md: { max: "767px" }, // => @media (max-width: 767px) { ... }
      sm: { max: "639px" }, // => @media (max-width: 639px) { ... }
      xs: { max: "479px" }, // => @media (max-width: 479px) { ... }
    },
  },

  plugins: [],
};
