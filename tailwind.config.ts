import type {Config} from "tailwindcss";
const plugin = require("tailwindcss/plugin");
import scrollbarHide from "tailwind-scrollbar-hide";

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
        mode: "0px 0px 20px 4px #244998",
      },
      animation: {
        "slide-up": "slideUp 0.5s linear forwards",
        "slide-down": "slideDown 0.5s linear forwards",
        gradient: "gradient 3s ease-in-out infinite",
        opacity: "opacity 0.5s linear forwards",
      },
      keyframes: {
        opacity: {
          "0%": {opacity: "0"},
          "50%": {opacity: "0"},
          "100%": {opacity: "1"},
        },
        slideUp: {
          "0%": {transform: "translateY(10px)", opacity: "0"},
          "100%": {transform: "translateY(0px)", opacity: "1"},
        },
        slideDown: {
          "0%": {transform: "translateY(0px)", opacity: "1"},
          "100%": {transform: "translateY(10px)", opacity: "0"},
        },
        gradient: {
          "0%": {
            background: "linear-gradient(to top, #13264e, #516ba2, #13264e)",
            backgroundSize: "100% 200%",
            backgroundPosition: "0% 0%",
          },
          "50%": {
            background: "linear-gradient(to top, #13264e, #516ba2, #13264e)",
            backgroundSize: "100% 200%",
            backgroundPosition: "0% 100%",
          },
          "100%": {
            background: "linear-gradient(to top, #13264e, #516ba2, #13264e)",
            backgroundSize: "100% 200%",
            backgroundPosition: "0% 0%",
          },
        },
        texts: {
          "0%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },
  plugins: [
    scrollbarHide,
    plugin(function ({addUtilities}: any) {
      addUtilities({
        ".clip-curve": {
          clipPath: "ellipse(50% 25% at 50% 100%)",
        },
      });
    }),
  ],
} satisfies Config;
export default config;
