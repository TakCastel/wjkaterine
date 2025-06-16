<template>
  <a
    :href="href"
    class="inline-block px-8 py-4 border-4 border-primary text-primary font-bold uppercase tracking-wider bg-white transition-all duration-300 relative overflow-hidden hover:bg-primary hover:text-white hover:shadow-xl"
  >
    <slot>CTA</slot>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>();
</script>
