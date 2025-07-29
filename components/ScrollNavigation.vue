<template>
  <nav class="fixed top-6 right-6 z-50">
    <div class="flex flex-col gap-3">
      <button
        v-for="(section, index) in sections"
        :key="section.id"
        @click="scrollToSection(section.id)"
        class="nav-dot w-4 h-4 rounded-full border-2 border-purple-light transition-all duration-300 hover:scale-125"
        :class="{ 'bg-purple-light': activeSection === section.id }"
        :title="section.title"
      ></button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  { id: 'kanban', title: 'Compétences & Formation' },
  { id: 'contact', title: 'Contact' }
]

const activeSection = ref('kanban')

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.nav-dot {
  transition: all 0.3s ease;
}

.nav-dot:hover {
  box-shadow: 0 0 10px rgba(163, 148, 255, 0.5);
}
</style> 