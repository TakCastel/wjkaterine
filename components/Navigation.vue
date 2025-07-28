<template>
  <nav
    class="fixed top-0 left-0 right-0 z-40 bg-bg/80 backdrop-blur-md border-b-2 border-white/20"
  >
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div
            class="w-8 h-8 bg-primary flex items-center justify-center transform rotate-12"
          >
            <span class="text-white font-bold text-sm">WJK</span>
          </div>
          <span class="font-serif font-bold text-primary text-lg"
            >Wagner Joye Katerine</span
          >
        </div>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-gray-700 hover:text-primary font-bold transition-colors duration-300 relative group"
          >
            {{ item.label }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
            />
          </a>
        </div>

        <!-- Bouton Contact Mobile -->
        <div class="md:hidden">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white border-2 border-primary hover:border-gray-900 transform rotate-1 hover:rotate-0 transition-all duration-300 text-sm font-bold"
          >
            <Icon name="lucide:mail" class="w-4 h-4" />
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
</script>
