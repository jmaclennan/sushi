// const themeColors = require("./colors.ts").themeColors;
const fonts = require("./fonts.ts").fonts;
const screens = require("./screens.ts").screens;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: ({ theme }) => ({
        black: "black",
        white: "white",
        error: theme.colors.red[700],
        success: theme.colors.green[700],
        "bg-primary": theme.colors.red[800],
        "bg-secondary": theme.colors.neutral[700],
        primary: theme.colors.red,
        secondary: theme.colors.neutral,
        // ...themeColors
      }),
      maxWidth: {
        "4xl": "1920px",
      },
      ...fonts,
      screens,
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
