import type { Config } from "tailwindcss";

const config: Config = {
  
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "rgb(var(--teal) / <alpha-value>)",
          pink: "rgb(var(--pink) / <alpha-value>)",
          blue: "rgb(var(--blue) / <alpha-value>)",
        },
        surface: {
          bg: "rgb(var(--bg) / <alpha-value>)",
          fg: "rgb(var(--fg) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
