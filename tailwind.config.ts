import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#666666",
        accent: "#2563EB",
        background: "#FFFFFF",
        borderc: "#EAEAEA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-jakarta)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurIn: {
          "0%": { opacity: "0", filter: "blur(12px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        blurIn: "blurIn 1s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
