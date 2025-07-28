<template>
  <footer class="bg-gray-900 text-white py-16 border-t-2 border-gray-800">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Contenu principal -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Logo et présentation -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-white border-2 border-gray-200 flex items-center justify-center transform rotate-12"
            >
              <img src="/logo-wjk.png" alt="WJK Logo" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-serif font-bold text-white text-lg">
                Wagner Joye Katerine
              </h3>
              <p class="text-gray-400 text-sm">
                Communication & Gestion Administrative
              </p>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Spécialisée en stratégie, réseaux sociaux et coordination de projet.
            Disponible pour accompagner vos projets de communication.
          </p>
        </div>

        <!-- Compétences clés -->
        <div class="space-y-4">
          <h4 class="font-bold text-white mb-4">Compétences</h4>
          <div class="space-y-2 text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <div
                class="w-4 h-4 bg-primary flex items-center justify-center transform rotate-12"
              >
                <Icon name="lucide:check" class="w-3 h-3 text-white" />
              </div>
              <span>Social Media Management</span>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="w-4 h-4 bg-primary flex items-center justify-center transform rotate-12"
              >
                <Icon name="lucide:check" class="w-3 h-3 text-white" />
              </div>
              <span>Stratégie Marketing</span>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="w-4 h-4 bg-primary flex items-center justify-center transform rotate-12"
              >
                <Icon name="lucide:check" class="w-3 h-3 text-white" />
              </div>
              <span>Gestion de Projet</span>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="w-4 h-4 bg-primary flex items-center justify-center transform rotate-12"
              >
                <Icon name="lucide:check" class="w-3 h-3 text-white" />
              </div>
              <span>PAO & Design</span>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h4 class="font-bold text-white mb-4">Contact</h4>
          <div class="space-y-2 text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <div
                class="w-4 h-4 bg-white flex items-center justify-center transform rotate-12"
              >
                <Icon name="lucide:mail" class="w-3 h-3 text-gray-900" />
              </div>
              <a
                href="mailto:wagnerjoye.katerine@gmail.com"
                class="hover:text-white transition-colors duration-200"
              >
                wagnerjoye.katerine@gmail.com
              </a>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="w-4 h-4 bg-white flex items-center justify-center transform rotate-12"
              >
                <Icon name="lucide:linkedin" class="w-3 h-3 text-gray-900" />
              </div>
              <a
                href="https://www.linkedin.com/in/katerine-wagner-joye/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="w-4 h-4 bg-white flex items-center justify-center transform rotate-12"
              >
                <Icon name="lucide:map-pin" class="w-3 h-3 text-gray-900" />
              </div>
              <span>Metz, France</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="border-t-2 border-gray-800 pt-8">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <!-- Copyright -->
          <div class="text-sm text-gray-400">
            © 2024 Wagner Joye Katerine. Tous droits réservés.
          </div>

          <!-- Liens légaux -->
          <div class="flex items-center gap-6 text-sm">
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-white"
            >
              Mentions légales
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-white"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
