<template>
  <a
    :href="href"
    class="group inline-flex items-center gap-4 px-10 py-5 border-2 border-primary text-primary font-bold uppercase tracking-wider bg-white hover:bg-primary hover:text-white transition-all duration-300 transform rotate-1 hover:rotate-0 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
  >
    <slot>CTA</slot>
    <Icon
      name="lucide:arrow-right"
      class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
    />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>
