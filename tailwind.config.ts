import type {Config} from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
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
        full: "0 0px 20px 2px rgba(0, 0, 0, 0.2)",
        div: "0 0px 4px 1px #ffffff",
      },
      animation: {
        "slide-up": "slideUp 0.5s linear forwards",
        "slide-down": "slideDown 0.5s linear forwards",
      },
      keyframes: {
        slideUp: {
          "0%": {transform: "translateY(10px)", opacity: "0"},
          "100%": {transform: "translateY(0px)", opacity: "1"},
        },
        slideDown: {
          "0%": {transform: "translateY(0px)", opacity: "1"},
          "100%": {transform: "translateY(10px)", opacity: "0"},
        },
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities}: any) {
      addUtilities({
        ".clip-curve": {
          clipPath: "ellipse(50% 25% at 50% 100%)",
        },
      });
    }),
  ],
};
export default config;
