<template>
  <section
    id="about"
    ref="aboutSection"
    class="min-h-app flex flex-col md:flex-row w-full min-h-screen overflow-hidden"
  >
    <!-- Bloc gauche -->
    <div
      class="w-full md:w-1/2 bg-primary text-white flex flex-col items-center justify-center p-8 md:p-12"
    >
      <h2
        ref="title"
        class="text-3xl md:text-5xl font-bold italic text-center mb-8 opacity-0"
      >
        À propos de moi
      </h2>
      <p
        ref="intro"
        class="text-base md:text-lg leading-relaxed max-w-md text-center md:text-left opacity-0"
      >
        Organisée, passionnée de communication et dotée d’un esprit créatif,
        j’assure la gestion de projets, le suivi administratif et le
        développement stratégique avec rigueur et engagement.
      </p>
    </div>

    <!-- Bloc droit : Diplômes avec icônes Lucide -->
    <div
      class="w-full md:w-1/2 bg-secondary text-white flex flex-col items-start justify-center p-6 md:p-12 space-y-6 md:space-y-8"
    >
      <!-- Master Card -->
      <div
        ref="master"
        class="flex flex-col md:flex-row w-full items-center md:items-center gap-4 md:gap-6 p-4 md:p-6 border-4 border-white opacity-0 transition-transform"
      >
        <Icon
          name="lucide:graduation-cap"
          class="w-10 h-10 md:w-12 md:h-12 text-white flex-shrink-0"
        />
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-base md:text-xl font-bold mb-1">
            Master Manager de la Stratégie & Performance Commerciale
          </h3>
          <p class="text-xs md:text-sm text-white/80">IMC Metz • 2022 - 2024</p>
        </div>
      </div>

      <!-- Bachelor Card -->
      <div
        ref="bachelor"
        class="flex flex-col md:flex-row w-full items-center md:items-center gap-4 md:gap-6 p-4 md:p-6 border-4 border-white opacity-0 transition-transform"
      >
        <Icon
          name="lucide:book-open"
          class="w-10 h-10 md:w-12 md:h-12 text-white flex-shrink-0"
        />
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-base md:text-xl font-bold mb-1">
            Bachelor Marketing & Responsable Commercial
          </h3>
          <p class="text-xs md:text-sm text-white/80">IMC Metz • 2021 - 2022</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const aboutSection = ref();
const title = ref();
const intro = ref();
const master = ref();
const bachelor = ref();

useScrollReveal(
  aboutSection,
  [
    { ref: title, direction: "left" },
    { ref: intro, direction: "left" },
    { ref: master, direction: "right" },
    { ref: bachelor, direction: "right" },
  ],
  0.3
);
</script>
