<template>
  <main>
    <HeroSection />

    <AboutMe />

    <SkillsSection />

    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  if (typeof window === "undefined") return;

  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% visible pour valider la section
    }
  );

  sections.forEach((section) => observer.observe(section));

  onBeforeUnmount(() => {
    sections.forEach((section) => observer.unobserve(section));
  });
});
</script>
