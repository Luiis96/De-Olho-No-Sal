import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: "#E8552E",
          deep: "#C43D1E",
        },
        peach: "#FFD9C2",
        cream: "#FFF6EE",
        plum: {
          DEFAULT: "#4A2E52",
          soft: "#7A5A82",
        },
        ink: "#2B2320",
        green: {
          DEFAULT: "#3F8A5B",
          bg: "#E7F3EB",
        },
        amber: {
          DEFAULT: "#D89A1E",
          bg: "#FCF1DC",
          text: "#8a6413",
        },
        red: {
          DEFAULT: "#C4392B",
          bg: "#FBE6E2",
        },
        line: "#EEDFD1",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: [
          "-apple-system",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        summary: "0 6px 24px rgba(74,46,82,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
