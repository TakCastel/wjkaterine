export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],

  css: ["@/assets/css/tailwind.css", "@/assets/css/main.css"],

  app: {
    head: {
      title:
        "Wagner Joye Katerine - Chargée de Communication & Gestion Administrative",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Chargée de communication et gestion administrative spécialisée en stratégie, réseaux sociaux et coordination de projet. Master Manager de la Stratégie & Performance Commerciale.",
        },
        { name: "author", content: "Wagner Joye Katerine" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "fr" },
        { name: "theme-color", content: "#020AE8" },

        // Open Graph
        {
          property: "og:title",
          content:
            "Wagner Joye Katerine - Chargée de Communication & Gestion Administrative",
        },
        {
          property: "og:description",
          content:
            "Chargée de communication et gestion administrative spécialisée en stratégie, réseaux sociaux et coordination de projet.",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:image", content: "/logo-wjk.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Wagner Joye Katerine - Chargée de Communication",
        },
        {
          name: "twitter:description",
          content:
            "Chargée de communication et gestion administrative spécialisée en stratégie, réseaux sociaux et coordination de projet.",
        },
        { name: "twitter:image", content: "/logo-wjk.png" },

        // Additional SEO
        {
          name: "keywords",
          content:
            "communication, gestion administrative, réseaux sociaux, stratégie marketing, coordination projet, Metz, France",
        },
        { name: "geo.region", content: "FR-57" },
        { name: "geo.placename", content: "Metz" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Sans:wght@400;500;700&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://wagnerjoyekaterine.com" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Wagner Joye Katerine",
            jobTitle: "Chargée de Communication et Gestion Administrative",
            description:
              "Chargée de communication et gestion administrative spécialisée en stratégie, réseaux sociaux et coordination de projet.",
            url: "https://wagnerjoyekaterine.com",
            image: "/logo-wjk.png",
            sameAs: ["https://www.linkedin.com/in/katerine-wagner-joye/"],
            email: "wagnerjoye.katerine@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Metz",
              addressRegion: "Moselle",
              addressCountry: "FR",
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "IMC Metz",
            },
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Master",
                name: "Master Manager de la Stratégie & Performance Commerciale",
                educationalLevel: "Master",
                recognizedBy: {
                  "@type": "EducationalOrganization",
                  name: "IMC Metz",
                },
                validIn: {
                  "@type": "Country",
                  name: "France",
                },
                dateIssued: "2024",
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Bachelor",
                name: "Bachelor Marketing & Responsable Commercial",
                educationalLevel: "Bachelor",
                recognizedBy: {
                  "@type": "EducationalOrganization",
                  name: "IMC Metz",
                },
                validIn: {
                  "@type": "Country",
                  name: "France",
                },
                dateIssued: "2022",
              },
            ],
            knowsAbout: [
              "Social Media Management",
              "Marketing Strategy",
              "Commercial Negotiation",
              "Project Management",
              "PAO",
              "Microsoft Office",
              "Google Workspace",
              "Canva",
              "Adobe Express",
              "CapCut",
              "Notion",
              "MailChimp",
              "Web Content Writing",
              "Content Creation",
            ],
            knowsLanguage: [
              {
                "@type": "Language",
                name: "French",
                level: "Native",
              },
              {
                "@type": "Language",
                name: "English",
                level: "A2-B1",
              },
            ],
          }),
        },
      ],
    },
  },

  // Optimisations de performance
  nitro: {
    compressPublicAssets: true,
  },

  // Configuration des images
  image: {
    quality: 80,
    format: ["webp", "avif", "jpg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});
