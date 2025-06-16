export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },

  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],

  css: ["@/assets/css/tailwind.css", "@/assets/css/main.css"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Sans:wght@400;500;700&display=swap",
        },
      ],
    },
  },
});