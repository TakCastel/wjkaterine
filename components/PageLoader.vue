<template>
  <Transition name="loader">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 bg-bg flex items-center justify-center"
    >
      <div class="text-center">
        <div class="relative">
          <!-- Logo animé -->
          <div class="w-16 h-16 mx-auto mb-8 relative">
            <div
              class="absolute inset-0 border-2 border-primary/30 rounded-full animate-ping"
            />
            <div
              class="absolute inset-2 border-2 border-secondary/30 rounded-full animate-ping delay-300"
            />
            <div
              class="absolute inset-4 bg-primary rounded-full animate-pulse"
            />
          </div>

          <!-- Texte de chargement -->
          <h2 class="text-2xl font-serif font-bold text-primary mb-4">
            Wagner Joye Katerine
          </h2>
          <p class="text-secondary font-accent">Chargement...</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  // Simuler un temps de chargement minimum pour une meilleure UX
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>

<style scoped>
.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.5s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
</style>
