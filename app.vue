<template>
  <div class="min-h-screen bg-bg text-gray-900 font-sans">
    <PageLoader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import PageLoader from "@/components/PageLoader.vue";
</script>
