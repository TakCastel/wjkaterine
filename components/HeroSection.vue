<template>
  <section
    id="home"
    ref="heroSection"
    class="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden"
  >
    <!-- Background subtil -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

    <!-- Éléments décoratifs très subtils -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/10 transform rotate-45"
      />
      <div
        class="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-secondary/20 transform -rotate-45"
      />
      <div
        class="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/5 transform rotate-12"
      />
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-5xl mx-auto text-center space-y-8">
      <!-- Badge professionnel -->
      <div
        class="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 text-primary border-2 border-primary/20 transform rotate-1 font-bold"
      >
        <Icon name="lucide:user-check" class="w-5 h-5" />
        Chargée de Communication & Gestion Administrative
      </div>

      <!-- Titre principal -->
      <h1
        ref="title"
        class="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 opacity-0 leading-tight"
      >
        Wagner Joye
        <span class="block text-primary">Katerine</span>
      </h1>

      <!-- Sous-titre -->
      <p
        ref="subtitle"
        class="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 mb-12"
      >
        Spécialisée en
        <span class="font-semibold text-primary">stratégie</span>,
        <span class="font-semibold text-secondary">réseaux sociaux</span> et
        <span class="font-semibold text-primary">coordination de projet</span>
      </p>

      <!-- Call-to-action -->
      <div ref="ctaButton" class="opacity-0 space-y-6">
        <CtaButton href="#about">Découvrir mon profil</CtaButton>

        <!-- Liens rapides -->
        <div
          class="flex items-center justify-center gap-8 text-sm text-gray-500"
        >
          <a
            href="#about"
            class="flex items-center gap-3 hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
          >
            <Icon name="lucide:user" class="w-5 h-5" />
            À propos
          </a>
          <a
            href="#skills"
            class="flex items-center gap-3 hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
          >
            <Icon name="lucide:target" class="w-5 h-5" />
            Compétences
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <div
        class="w-6 h-6 border-2 border-gray-400 flex items-center justify-center"
      >
        <Icon name="lucide:chevron-down" class="w-4 h-4 text-gray-400" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";
import CtaButton from "@/components/CtaButton.vue";

const heroSection = ref();
const title = ref();
const subtitle = ref();
const ctaButton = ref();

useScrollReveal(
  heroSection,
  [
    { ref: title, direction: "up" },
    { ref: subtitle, direction: "up" },
    { ref: ctaButton, direction: "up" },
  ],
  0.5
);
</script>
