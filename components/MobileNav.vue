<template>
  <nav class="flex flex-col space-y-6">
    <a
      href="#home"
      class="nav-link group"
      :class="{ active: currentSection === 'home' }"
      @click="$emit('close')"
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
      @click="$emit('close')"
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
      @click="$emit('close')"
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
      @click="$emit('close')"
    >
      <span class="relative">
        Contact
        <span
          class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
        />
      </span>
    </a>

    <!-- Bouton Contact CTA Mobile -->
    <div class="pt-4 border-t border-gray-200">
      <a
        href="#contact"
        class="block w-full px-6 py-3 bg-primary text-white font-medium rounded-lg text-center hover:bg-primary/90 transition-all duration-300"
        @click="$emit('close')"
      >
        Me contacter
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useActiveSection } from "~/composables/useActiveSection";

const { currentSection } = useActiveSection();

defineEmits(["close"]);
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 font-medium text-lg transition-colors duration-200 relative;
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
