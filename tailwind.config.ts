import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        sage: {
          DEFAULT: "#8A9A7B",
          dark: "#6B7A5E",
          light: "#B5C4A6",
        },
        terra: {
          DEFAULT: "#5C6B4F",
          dark: "#3F4F38",
          light: "#8A9A7B",
        },
        sand: {
          DEFAULT: "#D4C5A9",
          dark: "#BBA98A",
          light: "#EAE0CF",
        },
        bark: {
          DEFAULT: "#4A3728",
          dark: "#2C2010",
          light: "#6B5244",
        },
        "off-white": "#FAF8F4",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
