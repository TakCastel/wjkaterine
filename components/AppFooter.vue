<template>
  <footer class="w-full bg-secondary text-white px-6 py-12">
    <div
      class="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6"
    >
      <!-- Logo + Nom -->
      <div class="flex flex-col items-center space-y-3">
        <div
          class="bg-white rounded-full p-1 w-20 h-20 flex items-center justify-center"
        >
          <NuxtImg src="/logo-wjk.png" alt="Logo WJK" class="w-2/3" />
        </div>
        <h2
          class="text-xl md:text-2xl italic font-bold uppercase tracking-wider"
        >
          Wagner Joye Katerine
        </h2>
      </div>

      <!-- Coordonnées -->
      <ul class="space-y-1">
        <li><strong>Tél :</strong> (+33) 06.18.67.73.08</li>
        <li><strong>Email :</strong> wagnerjoye.katerine@gmail.com</li>
        <li><strong>Localisation :</strong> Vigy (57)</li>
        <li><strong>Permis B + Véhicule</strong></li>
      </ul>

      <!-- Copyright -->
      <p class="text-xs text-white/70">
        &copy; {{ new Date().getFullYear() }} Katerine Wagner Joye — Tous droits
        réservés.
      </p>
    </div>
  </footer>
</template>
