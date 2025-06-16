/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./components/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Bodoni Moda"', "serif"],
        accent: ['"Space Grotesk"', "sans-serif"],
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },

      colors: {
        primary: "#020AE8",
        secondary: "#F11680",
        bg: "#ECEEF3",
        white: "#ECEEF3",
      },
    },
  },
  plugins: [],
};
