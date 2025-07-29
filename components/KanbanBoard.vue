<template>
  <div id="kanban" class="min-h-screen bg-white-cream">
    <!-- Header style Vogue -->
    <header class="bg-white-cream border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <!-- Navigation supérieure -->
        <div class="flex items-center justify-between py-4 border-b border-gray-100">
          <div class="text-xs text-gray-500 uppercase tracking-wider">
            Communication & Gestion Administrative
          </div>
          <div class="text-xs text-gray-500 uppercase tracking-wider">
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
          <div class="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
          <p class="text-sm md:text-base text-text-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            Spécialisée en stratégie de communication, gestion administrative et coordination de projet
          </p>
        </div>
      </div>
    </header>

    <!-- Section Compétences et Expériences -->
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <!-- Communication -->
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-cyan-light rounded-lg shadow-lg flex items-center justify-center transform rotate-3">
              <span class="text-2xl">💬</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark">Communication</h3>
          </div>
          <p class="text-text-medium leading-relaxed mb-6">
            Stratégie de communication, gestion des réseaux sociaux, création de contenu et planification éditoriale. 
            Expertise en community management et développement de stratégies digitales.
          </p>
          <ul class="space-y-2 text-sm text-text-medium">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Stratégie de communication
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Gestion des réseaux sociaux
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Création de contenu
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div class="hidden md:flex w-32 h-32 bg-cyan-light rounded-lg shadow-lg items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span class="text-4xl">💬</span>
          </div>
        </div>
      </div>

      <!-- Gestion Administrative -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16 md:mb-24">
        <div class="w-full md:w-1/2">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-green-light rounded-lg shadow-lg flex items-center justify-center transform -rotate-3">
              <span class="text-2xl">📋</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark">Gestion Administrative</h3>
          </div>
          <p class="text-text-medium leading-relaxed mb-6">
            Suivi administratif, coordination de projet, organisation et planification des tâches. 
            Expertise en gestion de projets et optimisation des processus.
          </p>
          <ul class="space-y-2 text-sm text-text-medium">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Coordination de projet
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Suivi administratif
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Planification des tâches
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 flex justify-center">
          <div class="hidden md:flex w-32 h-32 bg-green-light rounded-lg shadow-lg items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <span class="text-4xl">📋</span>
          </div>
        </div>
      </div>

      <!-- Outils & Technologies -->
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-yellow-light rounded-lg shadow-lg flex items-center justify-center transform rotate-3">
              <span class="text-2xl">💻</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark">Outils & Technologies</h3>
          </div>
          <p class="text-text-medium leading-relaxed mb-6">
            Maîtrise complète des outils de productivité et de création. 
            Expertise en logiciels de gestion et plateformes digitales.
          </p>
          <div class="grid grid-cols-2 gap-3 text-sm text-text-medium">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Microsoft Office
            </div>
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Google Workspace
            </div>
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Canva
            </div>
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-purple-light rounded-full"></span>
              Adobe Express
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div class="hidden md:flex w-32 h-32 bg-yellow-light rounded-lg shadow-lg items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span class="text-4xl">💻</span>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16 md:mb-24">
        <div class="w-full md:w-1/2">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-purple-light rounded-lg shadow-lg flex items-center justify-center transform -rotate-3">
              <span class="text-2xl">📞</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark">Disponible</h3>
          </div>
          <p class="text-text-medium leading-relaxed mb-6">
            Pour vos projets de communication et gestion administrative. 
            Réactive et disponible pour accompagner vos projets.
          </p>
          <a href="#contact" class="inline-block px-8 py-4 bg-purple-light text-white rounded-lg font-semibold hover:bg-purple-light/90 transition-colors duration-200 shadow-lg">
            Me contacter
          </a>
        </div>
        <div class="w-full md:w-1/2 flex justify-center">
          <div class="hidden md:flex w-32 h-32 bg-purple-light rounded-lg shadow-lg items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <span class="text-4xl">📞</span>
          </div>
        </div>
      </div>

      <!-- Formation -->
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-orange-light rounded-lg shadow-lg flex items-center justify-center transform rotate-3">
              <span class="text-2xl">🎓</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark">Formation</h3>
          </div>
          <div class="space-y-4 mb-6">
            <div class="border-l-4 border-orange-light pl-4">
              <h4 class="font-semibold text-text-dark">Master Manager</h4>
              <p class="text-sm text-text-medium">Stratégie & Performance Commerciale - IMC Metz</p>
              <span class="text-xs text-orange-light font-medium">2024</span>
            </div>
            <div class="border-l-4 border-orange-light pl-4">
              <h4 class="font-semibold text-text-dark">Bachelor Marketing</h4>
              <p class="text-sm text-text-medium">Responsable Commercial - IMC Metz</p>
              <span class="text-xs text-orange-light font-medium">2022</span>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div class="hidden md:flex w-32 h-32 bg-orange-light rounded-lg shadow-lg items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span class="text-4xl">🎓</span>
          </div>
        </div>
      </div>

      <!-- Expériences -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
        <div class="w-full md:w-1/2">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 md:hidden bg-pink-light rounded-lg shadow-lg flex items-center justify-center transform -rotate-3">
              <span class="text-2xl">🚀</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-text-dark">Expériences</h3>
          </div>
          <div class="space-y-4 mb-6">
            <div class="border-l-4 border-yellow-light pl-4">
              <h4 class="font-semibold text-text-dark">Gestion de Projet</h4>
              <p class="text-sm text-text-medium">Coordination et suivi de projets de communication, planification et exécution des stratégies.</p>
            </div>
            <div class="border-l-4 border-yellow-light pl-4">
              <h4 class="font-semibold text-text-dark">Community Management</h4>
              <p class="text-sm text-text-medium">Gestion des réseaux sociaux, création de contenu et animation de communautés.</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-center">
          <div class="hidden md:flex w-32 h-32 bg-pink-light rounded-lg shadow-lg items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <span class="text-4xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles pour les post-its */
.post-it {
  transition: all 0.3s ease;
}

.post-it:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
</style> 