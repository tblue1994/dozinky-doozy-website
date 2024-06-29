import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#184898",
      red: "#be1e2d",
      darkred: "#710f11",
      yellow: "#fbb040",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "gravel-roads": "url('/background.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
