/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro"],
  },
}
