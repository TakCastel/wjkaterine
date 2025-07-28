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

      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },

      backdropBlur: {
        xs: "2px",
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
