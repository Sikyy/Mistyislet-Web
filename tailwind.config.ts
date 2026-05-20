import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#070806",
        graphite: "#141510",
        mist: "#F5F0E6",
        smoke: "#BEB8AA",
        brass: "#C9A25B",
        copper: "#A96E42",
        teal: "#62B7A8",
        moss: "#7F9B6B",
      },
      boxShadow: {
        glow: "0 0 42px rgba(98, 183, 168, 0.18)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
