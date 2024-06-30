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
      sapphire: {
        "50": "#f0f7fa",
        "100": "#e1eef5",
        "200": "#b5d2e6",
        "300": "#8db5d6",
        "400": "#4b7eb8",
        "500": "#184898",
        "600": "#133d8a",
        "700": "#0e2e73",
        "800": "#09225c",
        "900": "#051645",
        "950": "#020c2b",
      },
      "flush-mahogany": {
        "50": "#fcf2f8",
        "100": "#fae6f0",
        "200": "#f0bdd3",
        "300": "#e697b4",
        "400": "#d45774",
        "500": "#be1e2d",
        "600": "#ad1827",
        "700": "#8f111c",
        "800": "#730b14",
        "900": "#57060b",
        "950": "#380306",
      },
      "venetian-red": {
        "50": "#f7edf2",
        "100": "#f0dae4",
        "200": "#dbabbe",
        "300": "#c78197",
        "400": "#9c3d4c",
        "500": "#710f11",
        "600": "#660c0e",
        "700": "#54080a",
        "800": "#420506",
        "900": "#330304",
        "950": "#210102",
      },
      "yellow-orange": {
        "50": "#fffdf5",
        "100": "#fffbed",
        "200": "#fff3cf",
        "300": "#fce7b1",
        "400": "#fcd179",
        "500": "#fbb040",
        "600": "#e09634",
        "700": "#ba7423",
        "800": "#965417",
        "900": "#70380c",
        "950": "#471e05",
      },
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
