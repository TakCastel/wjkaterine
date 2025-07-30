<template>
  <div id="kanban" class="min-h-screen bg-gradient-to-br from-white-cream via-purple-50 to-pink-50">
    <!-- Header style Vogue -->
    <header class="bg-gradient-to-r from-white-cream to-purple-50 border-b border-purple-100">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <!-- Navigation supérieure -->
        <div class="flex items-center justify-between py-4 border-b border-purple-100">
          <div class="text-xs text-purple-600 uppercase tracking-wider font-medium">
            Communication & Gestion Administrative
          </div>
          <div class="text-xs text-purple-600 uppercase tracking-wider font-medium">
            Metz, France
          </div>
        </div>
        
        <!-- Titre principal -->
        <div class="py-12 md:py-16 text-center">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-paprika text-text-dark mb-4 tracking-tight">
            Wagner Joye
          </h1>
          <h2 class="text-5xl md:text-7xl lg:text-8xl font-paprika text-purple-light mb-6 tracking-tight">
            Katerine
          </h2>
          <div class="w-16 h-px bg-gradient-to-r from-purple-light to-pink-light mx-auto mb-8"></div>
          <p class="text-sm md:text-base text-text-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            Je suis spécialisée en stratégie de communication, gestion administrative et coordination de projet
          </p>
        </div>
      </div>
    </header>

    <!-- Section Compétences et Expériences -->
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <!-- Communication -->
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24 relative">
        <!-- Éléments décoratifs -->
        <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-light to-purple-light rounded-full opacity-10 blur-xl"></div>
        
        <div class="w-full md:w-1/2 order-2 md:order-1 relative z-10">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-gradient-to-br from-cyan-light to-purple-light rounded-xl shadow-lg flex items-center justify-center transform rotate-3">
              <Icon name="fluent-emoji:speech-balloon" class="text-2xl" />
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Communication</h3>
          </div>
          <p class="text-text-medium leading-relaxed mb-6">
            Je maîtrise la stratégie de communication, la gestion des réseaux sociaux, la création de contenu et la planification éditoriale. 
            Je développe également des stratégies digitales et anime des communautés en ligne.
          </p>
          <ul class="space-y-3 text-sm text-text-medium">
            <li class="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-cyan-light to-purple-light rounded-full"></div>
              <span class="font-medium">Stratégie de communication</span>
            </li>
            <li class="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-cyan-light to-purple-light rounded-full"></div>
              <span class="font-medium">Gestion des réseaux sociaux</span>
            </li>
            <li class="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-cyan-light to-purple-light rounded-full"></div>
              <span class="font-medium">Création de contenu</span>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 flex justify-start relative z-10">
          <div class="hidden md:flex w-32 h-32 bg-gradient-to-br from-cyan-light to-purple-light rounded-2xl shadow-xl items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <Icon name="fluent-emoji:speech-balloon" class="text-4xl" />
          </div>
        </div>
      </div>

      <!-- Gestion Administrative -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16 md:mb-24 relative">
        <!-- Éléments décoratifs -->
        <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-light to-cyan-light rounded-full opacity-10 blur-xl"></div>
        
        <div class="w-full md:w-1/2 relative z-10">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-gradient-to-br from-green-light to-cyan-light rounded-xl shadow-lg flex items-center justify-center transform -rotate-3">
              <Icon name="fluent-emoji:clipboard" class="text-2xl" />
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">Gestion Administrative</h3>
          </div>
          <p class="text-text-medium leading-relaxed mb-6">
            Je gère le suivi administratif, la coordination de projet, l'organisation et la planification des tâches. 
            J'optimise également les processus et assure la gestion complète de projets.
          </p>
          <ul class="space-y-3 text-sm text-text-medium">
            <li class="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-green-light to-cyan-light rounded-full"></div>
              <span class="font-medium">Coordination de projet</span>
            </li>
            <li class="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-green-light to-cyan-light rounded-full"></div>
              <span class="font-medium">Suivi administratif</span>
            </li>
            <li class="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-green-light to-cyan-light rounded-full"></div>
              <span class="font-medium">Planification des tâches</span>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 flex justify-end relative z-10">
          <div class="hidden md:flex w-32 h-32 bg-gradient-to-br from-green-light to-cyan-light rounded-2xl shadow-xl items-center justify-center transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <Icon name="fluent-emoji:clipboard" class="text-4xl" />
          </div>
        </div>
      </div>

      <!-- Outils & Technologies -->
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24 relative">
        <!-- Éléments décoratifs -->
        <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-light to-orange-light rounded-full opacity-10 blur-xl"></div>
        
        <div class="w-full md:w-1/2 order-2 md:order-1 relative z-10">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-gradient-to-br from-yellow-light to-orange-light rounded-xl shadow-lg flex items-center justify-center transform rotate-3">
              <Icon name="fluent-emoji:laptop" class="text-2xl" />
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Outils & Technologies</h3>
          </div>
          <p class="text-text-medium leading-relaxed mb-6">
            Je maîtrise parfaitement les outils de productivité et de création. 
            Je travaille avec les logiciels de gestion et les plateformes digitales les plus récents.
          </p>
          <div class="grid grid-cols-2 gap-3 text-sm text-text-medium">
            <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-yellow-light to-orange-light rounded-full"></div>
              <span class="font-medium">Microsoft Office</span>
            </div>
            <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-yellow-light to-orange-light rounded-full"></div>
              <span class="font-medium">Google Workspace</span>
            </div>
            <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-yellow-light to-orange-light rounded-full"></div>
              <span class="font-medium">Canva</span>
            </div>
            <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors">
              <div class="w-2 h-2 bg-gradient-to-r from-yellow-light to-orange-light rounded-full"></div>
              <span class="font-medium">Adobe Express</span>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 flex justify-start relative z-10">
          <div class="hidden md:flex w-32 h-32 bg-gradient-to-br from-yellow-light to-orange-light rounded-2xl shadow-xl items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <Icon name="fluent-emoji:laptop" class="text-4xl" />
          </div>
        </div>
      </div>

      <!-- Formation -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16 md:mb-24 relative">
        <!-- Éléments décoratifs -->
        <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-10 blur-xl"></div>
        
        <div class="w-full md:w-1/2 relative z-10">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-gradient-to-br from-pink-300 to-pink-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-3">
              <Icon name="fluent-emoji:graduation-cap" class="text-2xl" />
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Formation</h3>
          </div>
                      <div class="space-y-4 mb-6">
              <div class="border-l-4 border-gradient-to-b from-pink-300 to-pink-500 pl-4">
                <h4 class="font-semibold text-text-dark">Master Manager</h4>
                <p class="text-sm text-text-medium">Stratégie & Performance Commerciale - IMC Metz</p>
                <span class="text-xs text-pink-600 font-medium bg-pink-100 px-2 py-1 rounded-full">2024</span>
              </div>
              <div class="border-l-4 border-gradient-to-b from-pink-300 to-pink-500 pl-4">
                <h4 class="font-semibold text-text-dark">Bachelor Marketing</h4>
                <p class="text-sm text-text-medium">Responsable Commercial - IMC Metz</p>
                <span class="text-xs text-pink-600 font-medium bg-pink-100 px-2 py-1 rounded-full">2022</span>
              </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-end relative z-10">
          <div class="hidden md:flex w-32 h-32 bg-gradient-to-br from-pink-300 to-pink-500 rounded-2xl shadow-xl items-center justify-center transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <Icon name="fluent-emoji:graduation-cap" class="text-4xl" />
          </div>
        </div>
      </div>

      <!-- Expériences -->
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
        <!-- Éléments décoratifs -->
        <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-light to-cyan-light rounded-full opacity-10 blur-xl"></div>
        
        <div class="w-full md:w-1/2 order-2 md:order-1 relative z-10">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-gradient-to-br from-blue-light to-cyan-light rounded-xl shadow-lg flex items-center justify-center transform rotate-3">
              <Icon name="fluent-emoji:rocket" class="text-2xl" />
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Expériences</h3>
          </div>
                      <div class="space-y-4 mb-6">
              <div class="border-l-4 border-gradient-to-b from-blue-light to-cyan-light pl-4">
                <h4 class="font-semibold text-text-dark">Gestion de Projet</h4>
                <p class="text-sm text-text-medium">J'assure la coordination et le suivi de projets de communication, la planification et l'exécution des stratégies.</p>
              </div>
              <div class="border-l-4 border-gradient-to-b from-blue-light to-cyan-light pl-4">
                <h4 class="font-semibold text-text-dark">Community Management</h4>
                <p class="text-sm text-text-medium">Je gère les réseaux sociaux, crée du contenu et anime les communautés.</p>
              </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 flex justify-start relative z-10">
          <div class="hidden md:flex w-32 h-32 bg-gradient-to-br from-blue-light to-cyan-light rounded-2xl shadow-xl items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <Icon name="fluent-emoji:rocket" class="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pas d'animations GSAP
</script>

<style scoped>
/* Styles pour les post-its */
.post-it {
  transition: all 0.3s ease;
}

.post-it:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Animations personnalisées */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Gradients personnalisés */
.border-gradient-to-b {
  border-image: linear-gradient(to bottom, var(--tw-gradient-stops)) 1;
}

/* Effet de parallaxe subtil */
.parallax {
  transform: translateZ(0);
  will-change: transform;
}
</style> 