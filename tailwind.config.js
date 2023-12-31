/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
    require("tw-elements/dist/plugin.cjs"),
  ],
  darkMode: ['class', '.darkmode'],
}
