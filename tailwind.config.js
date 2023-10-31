/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#0012FF",
        green: "#67D4CA",
        red: "#F28080",
        "dark-light": "#f8fafb"
      },
      fontFamily: {
        primary: '"Nunito", sans-serif'
      },
      fontSize: {
        fontPrimary: "16px",
      }
    },
  },
  plugins: [],
}

