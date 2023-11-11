/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      path:(theme)=>({
        "clip-path":" polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);"
      })
    },
  },
  plugins: [],
}