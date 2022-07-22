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
    {
      pattern: /bg-(red|green|blue|orange|yellow)-(100|200|300|400|500)/,
    },
    "bg-white",
  ]
}
