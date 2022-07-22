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
  safelist: [
    "*-white",
    "*-orange-500",
    "*-green-500",
    "*-red-500",
    "*-blue-500",
    "*-yellow-400",
  ]
}
