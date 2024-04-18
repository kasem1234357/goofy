import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        dark_brown: {
          100: "#d3cfce",
          200: "#a7a09d",
          300: "#7a706b",
          400: "#4e413a",
          500: "#221109",
          600: "#1b0e07",
          700: "#140a05",
          800: "#0e0704",
          900: "#070302"
},
        brown: {
          100: "#e9e5dd",
          200: "#d3caba",
          300: "#bdb098",
          400: "#a79575",
          500: "#917b53",
          600: "#746242",
          700: "#574a32",
          800: "#3a3121",
          900: "#1d1911"
},
        black: {
          100: "#d3d3d3",
          200: "#a7a7a7",
          300: "#7b7b7b",
          400: "#4f4f4f",
          500: "#232323",
          600: "#1c1c1c",
          700: "#151515",
          800: "#0e0e0e",
          900: "#070707"
         },
        main: {
          100: "#fbf9f7",
          200: "#f7f4f0",
          300: "#f4eee8",
          400: "#f0e9e1",
          500: "#ece3d9",
          600: "#bdb6ae",
          700: "#8e8882",
          800: "#5e5b57",
          900: "#2f2d2b"
      },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
