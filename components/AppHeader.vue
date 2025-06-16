<template>
  <header class="sticky top-0 z-50 h-20 bg-primary overflow-hidden">
    <div class="flex justify-between items-center h-full px-8">
      <!-- Logo avec fond blanc -->
      <LogoWJK class="h-8 w-auto" />

      <!-- Desktop menu -->
      <div class="hidden md:flex space-x-8">
        <DesktopNav />
      </div>

      <!-- Mobile menu -->
      <div class="flex md:hidden">
        <MobileNav />
      </div>
    </div>
  </header>
</template>
