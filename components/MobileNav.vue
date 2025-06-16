<template>
  <div>
    <!-- Bouton burger / X -->
    <button
      aria-label="Menu"
      class="fixed top-5 right-5 z-50"
      @click="toggleMenu"
    >
      <Icon
        :name="isOpen ? 'mdi:close' : 'mdi:menu'"
        class="text-white w-8 h-8 transition-all duration-200"
      />
    </button>

    <!-- Menu plein écran -->
    <transition name="slide">
      <nav
        v-if="isOpen"
        class="fixed inset-0 bg-primary flex flex-col items-center justify-center space-y-8 z-40"
      >
        <NuxtLink
          to="/"
          class="nav-link"
          :class="{ active: isActive('/') }"
          @click="closeMenu"
        >
          Accueil
        </NuxtLink>

        <NuxtLink
          to="/#about"
          class="nav-link"
          :class="{ active: isActive('#about') }"
          @click="closeMenu"
        >
          À propos
        </NuxtLink>

        <NuxtLink
          to="/#skills"
          class="nav-link"
          :class="{ active: isActive('#skills') }"
          @click="closeMenu"
        >
          Compétences
        </NuxtLink>

        <NuxtLink
          to="/#contact"
          class="nav-link"
          :class="{ active: isActive('#contact') }"
          @click="closeMenu"
        >
          Contact
        </NuxtLink>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

// Gère / ou /#section
const isActive = (hash: string) => {
  if (hash === "/") return route.path === "/" && !route.hash;
  return route.hash === hash;
};
</script>

<style scoped>
.nav-link {
  @apply text-white uppercase text-3xl font-bold transition-colors duration-200;
}

.nav-link:hover {
  @apply text-secondary;
}

.nav-link.active {
  font-style: italic;
}

/* Animation slide */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-from {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
