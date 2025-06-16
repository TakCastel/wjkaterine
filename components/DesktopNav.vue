<template>
  <nav class="flex space-x-10">
    <a href="#" class="nav-link" :class="{ active: currentSection === 'hero' }"
      >Accueil</a
    >
    <a
      href="#about"
      class="nav-link"
      :class="{ active: currentSection === 'about' }"
      >À propos</a
    >
    <a
      href="#skills"
      class="nav-link"
      :class="{ active: currentSection === 'skills' }"
      >Compétences</a
    >
    <a
      href="#contact"
      class="nav-link"
      :class="{ active: currentSection === 'contact' }"
      >Contact</a
    >
  </nav>
</template>

<script setup>
import { useActiveSection } from "~/composables/useActiveSection";

const { currentSection } = useActiveSection();
</script>

<style scoped>
.nav-link {
  @apply text-white uppercase text-lg font-bold transition-colors duration-200;
}

.nav-link:hover {
  @apply text-secondary;
}

.nav-link.active {
  font-style: italic;
}
</style>
