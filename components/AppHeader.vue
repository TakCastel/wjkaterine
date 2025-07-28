<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo et nom -->
        <div class="flex items-center space-x-4">
          <div
            class="w-10 h-10 bg-white border-2 border-gray-200 flex items-center justify-center transform rotate-12"
          >
            <img src="/logo-wjk.png" alt="WJK Logo" class="w-6 h-6" />
          </div>
          <div class="hidden sm:block">
            <h1 class="font-serif font-bold text-primary text-lg">
              Wagner Joye Katerine
            </h1>
            <p class="text-xs text-gray-500 font-bold">
              Communication & Gestion Administrative
            </p>
          </div>
        </div>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-gray-700 hover:text-primary font-bold transition-all duration-300 relative group"
          >
            {{ item.label }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
            />
          </a>

          <!-- Bouton Contact Desktop -->
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white border-2 border-primary hover:border-gray-900 transform rotate-1 hover:rotate-0 transition-all duration-300 font-bold"
          >
            <Icon name="lucide:mail" class="w-4 h-4" />
            Me contacter
          </a>
        </div>

        <!-- Bouton Contact Mobile -->
        <div class="md:hidden">
          <button
            class="p-3 text-gray-700 hover:text-primary transition-all duration-300 border-2 border-transparent hover:border-primary"
            aria-label="Menu"
            @click="toggleMobileMenu"
          >
            <Icon
              :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>

      <!-- Menu Mobile -->
      <Transition name="slide-down">
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden mt-4 pb-4 border-t-2 border-gray-200"
        >
          <nav class="flex flex-col space-y-4">
            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              class="text-gray-700 hover:text-primary font-bold transition-all duration-300 border-b-2 border-transparent hover:border-primary py-2"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </a>

            <!-- Bouton Contact Mobile -->
            <div class="pt-4 border-t-2 border-gray-200">
              <a
                href="#contact"
                class="block w-full px-6 py-3 bg-primary text-white font-bold text-center border-2 border-primary hover:border-gray-900 transform rotate-1 hover:rotate-0 transition-all duration-300"
                @click="closeMobileMenu"
              >
                Me contacter
              </a>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const navItems = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
