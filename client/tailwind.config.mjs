/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#0534a3",
        "discreet-cream": "#F8F6F1",
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
