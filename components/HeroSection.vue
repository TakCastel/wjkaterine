<template>
  <section
    ref="heroSection"
    class="relative min-h-app flex flex-col justify-center items-center overflow-hidden px-6 pt-6 md:pt-0 text-left md:text-center"
  >
    <div class="relative z-10 pb-20 w-full max-w-3xl mx-auto">
      <h1
        ref="title"
        class="text-4xl md:text-6xl font-serif font-bold italic text-primary mb-4 md:mb-6 opacity-0 uppercase"
      >
        Wagner Joye Katerine
      </h1>
      <p
        ref="subtitle"
        class="text-lg md:text-2xl text-secondary font-accent mb-6 md:mb-8 opacity-0"
      >
        Chargée de communication et gestion administrative — stratégie, réseaux
        sociaux et coordination de projet.
      </p>
      <div ref="ctaButton" class="opacity-0">
        <CtaButton href="#contact">Contactez-moi</CtaButton>
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
    { ref: title, direction: "left" },
    { ref: subtitle, direction: "right" },
    { ref: ctaButton },
  ],
  0.5
);
</script>
