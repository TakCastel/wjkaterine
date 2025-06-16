<template>
  <section
    id="skills"
    ref="skillsSection"
    class="min-h-app w-full flex flex-col items-center justify-center bg-bg px-6 py-20 space-y-12"
  >
    <!-- Bloc titre -->
    <h2 class="text-3xl md:text-5xl font-serif italic font-bold text-primary">
      Mes Compétences
    </h2>

    <!-- 5 PILLARS : style CTA / Diplômes -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl w-full"
    >
      <div
        v-for="(skill, i) in mainSkills"
        :key="i"
        class="flex flex-col items-center text-center border-4 border-white p-6 h-full bg-transparent"
      >
        <Icon :name="skill.icon" class="w-12 h-12 mb-4 text-primary" />
        <h3 class="text-lg md:text-xl font-bold">{{ skill.label }}</h3>
      </div>
    </div>

    <!-- DETAILED TAGS : clean style tag cloud -->
    <div class="max-w-6xl w-full">
      <h3 class="text-xl md:text-2xl font-bold text-primary mb-4">
        Compétences Complémentaires
      </h3>
      <div class="flex flex-wrap gap-4">
        <span
          v-for="(tag, i) in tags"
          :key="i"
          class="border-2 border-primary text-primary px-4 py-2 font-medium hover:bg-primary hover:text-bg transition rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const mainSkills = [
  { label: "Social Media", icon: "lucide:share-2" },
  { label: "Stratégie Marketing", icon: "lucide:target" },
  { label: "Négociation Commerciale", icon: "lucide:handshake" },
  { label: "Project Management", icon: "lucide:check-square" },
  { label: "PAO", icon: "lucide:pen-tool" },
];

const tags = [
  "Microsoft Office",
  "Google Workspace",
  "Canva",
  "Adobe Express",
  "CapCut",
  "Notion",
  "MailChimp",
  "Réseaux sociaux",
  "Rédaction web",
  "Création de contenu",
  "Orthographe soignée",
  "Autonomie",
  "Rigueur",
  "Polyvalence",
  "Proactivité",
  "Anglais A2-B1",
];
</script>
