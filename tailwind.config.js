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
        paprika: ['"Paprika"', "cursive"],
      },
      colors: {
        // Palette de couleurs optimisée pour l'accessibilité WCAG
        'pink-light': '#FF8A8A',      // Plus foncé pour meilleur contraste
        'orange-light': '#FFB366',     // Plus foncé pour meilleur contraste
        'yellow-light': '#F4E666',     // Plus foncé pour meilleur contraste
        'green-light': '#A8E6A8',      // Plus foncé pour meilleur contraste
        'cyan-light': '#66D9E6',       // Plus foncé pour meilleur contraste
        'blue-light': '#8AB3FF',       // Plus foncé pour meilleur contraste
        'purple-light': '#A394FF',     // Plus foncé pour meilleur contraste
        'pink-bright': '#E666E6',      // Plus foncé pour meilleur contraste
        'white-cream': '#FFFFFC',      // Gardé tel quel
        'text-dark': '#2D3748',        // Texte sombre pour contraste
        'text-medium': '#4A5568',      // Texte moyen
        'text-light': '#718096',       // Texte clair
      },
    },
  },
  plugins: [],
};
