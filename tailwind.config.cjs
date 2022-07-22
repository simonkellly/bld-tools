/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
}
