<template>
  <nav class="flex items-center space-x-8">
    <a
      href="#home"
      class="nav-link group"
      :class="{ active: currentSection === 'home' }"
    >
      <span class="relative">
        Accueil
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
        />
      </span>
    </a>
    <a
      href="#about"
      class="nav-link group"
      :class="{ active: currentSection === 'about' }"
    >
      <span class="relative">
        À propos
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
        />
      </span>
    </a>
    <a
      href="#skills"
      class="nav-link group"
      :class="{ active: currentSection === 'skills' }"
    >
      <span class="relative">
        Compétences
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
        />
      </span>
    </a>
    <a
      href="#contact"
      class="nav-link group"
      :class="{ active: currentSection === 'contact' }"
    >
      <span class="relative">
        Contact
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
        />
      </span>
    </a>

    <!-- Bouton Contact CTA -->
    <a
      href="#contact"
      class="ml-4 px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-md"
    >
      Me contacter
    </a>
  </nav>
</template>

<script setup>
import { useActiveSection } from "~/composables/useActiveSection";

const { currentSection } = useActiveSection();
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 font-medium transition-colors duration-200 relative;
}

.nav-link:hover {
  @apply text-primary;
}

.nav-link.active {
  @apply text-primary font-semibold;
}

.nav-link.active span::after {
  @apply w-full;
}
</style>
