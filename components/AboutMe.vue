<template>
  <section
    id="about"
    ref="aboutSection"
    class="relative min-h-screen py-24 px-6 bg-white"
  >
    <div class="max-w-7xl mx-auto">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <h2
          ref="title"
          class="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 opacity-0"
        >
          À propos de moi
        </h2>
        <p
          ref="intro"
          class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0"
        >
          Organisée, passionnée de communication et dotée d'un esprit créatif,
          j'assure la gestion de projets, le suivi administratif et le
          développement stratégique avec rigueur et engagement.
        </p>
      </div>

      <!-- Contenu principal -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Bloc gauche : Présentation -->
        <div class="space-y-8">
          <div
            ref="presentation"
            class="bg-gray-50 border-2 border-gray-200 p-8 opacity-0"
          >
            <h3
              class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4"
            >
              <div
                class="w-8 h-8 bg-primary flex items-center justify-center transform rotate-12"
              >
                <Icon name="lucide:user" class="w-5 h-5 text-white" />
              </div>
              Mon Profil
            </h3>
            <div class="space-y-4 text-gray-600">
              <p>
                Passionnée par la
                <span class="font-semibold text-primary">communication</span> et
                la
                <span class="font-semibold text-secondary"
                  >gestion de projet</span
                >, je combine créativité et rigueur pour accompagner les
                entreprises dans leur développement.
              </p>
              <p>
                Mon approche est centrée sur l'<span
                  class="font-semibold text-primary"
                  >efficacité</span
                >
                et la
                <span class="font-semibold text-secondary"
                  >satisfaction client</span
                >, avec une attention particulière portée aux détails et à la
                qualité.
              </p>
            </div>
          </div>

          <!-- Compétences clés -->
          <div ref="skills" class="grid grid-cols-2 gap-4 opacity-0">
            <div
              class="bg-primary/5 border-2 border-primary/20 p-4 text-center transform rotate-1"
            >
              <div
                class="w-8 h-8 bg-primary flex items-center justify-center mx-auto mb-3 transform -rotate-12"
              >
                <Icon name="lucide:target" class="w-5 h-5 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900">Stratégie</h4>
              <p class="text-sm text-gray-600">Marketing & Communication</p>
            </div>
            <div
              class="bg-secondary/5 border-2 border-secondary/20 p-4 text-center transform -rotate-1"
            >
              <div
                class="w-8 h-8 bg-secondary flex items-center justify-center mx-auto mb-3 transform rotate-12"
              >
                <Icon name="lucide:share-2" class="w-5 h-5 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900">Réseaux Sociaux</h4>
              <p class="text-sm text-gray-600">Gestion & Animation</p>
            </div>
            <div
              class="bg-primary/5 border-2 border-primary/20 p-4 text-center transform rotate-1"
            >
              <div
                class="w-8 h-8 bg-primary flex items-center justify-center mx-auto mb-3 transform -rotate-12"
              >
                <Icon name="lucide:check-square" class="w-5 h-5 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900">Projets</h4>
              <p class="text-sm text-gray-600">Coordination & Suivi</p>
            </div>
            <div
              class="bg-secondary/5 border-2 border-secondary/20 p-4 text-center transform -rotate-1"
            >
              <div
                class="w-8 h-8 bg-secondary flex items-center justify-center mx-auto mb-3 transform rotate-12"
              >
                <Icon name="lucide:pen-tool" class="w-5 h-5 text-white" />
              </div>
              <h4 class="font-semibold text-gray-900">PAO</h4>
              <p class="text-sm text-gray-600">Création & Design</p>
            </div>
          </div>
        </div>

        <!-- Bloc droit : Formation -->
        <div class="space-y-8">
          <h3
            class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-4"
          >
            <div
              class="w-8 h-8 bg-primary flex items-center justify-center transform rotate-12"
            >
              <Icon name="lucide:graduation-cap" class="w-5 h-5 text-white" />
            </div>
            Formation
          </h3>

          <!-- Master -->
          <div
            ref="master"
            class="group bg-white border-2 border-gray-200 p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0 transform hover:rotate-1"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-primary/10 border-2 border-primary/20 flex items-center justify-center transform rotate-6"
                >
                  <Icon
                    name="lucide:graduation-cap"
                    class="w-6 h-6 text-primary"
                  />
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-gray-900 mb-1">
                  Master Manager de la Stratégie & Performance Commerciale
                </h4>
                <p class="text-sm text-gray-600 mb-2">IMC Metz • 2022 - 2024</p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span
                    class="px-3 py-1 bg-primary/10 text-primary border border-primary/20"
                    >Master</span
                  >
                  <span
                    class="px-3 py-1 bg-gray-100 text-gray-600 border border-gray-200"
                    >Stratégie</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Bachelor -->
          <div
            ref="bachelor"
            class="group bg-white border-2 border-gray-200 p-6 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 opacity-0 transform hover:-rotate-1"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center transform -rotate-6"
                >
                  <Icon
                    name="lucide:book-open"
                    class="w-6 h-6 text-secondary"
                  />
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-gray-900 mb-1">
                  Bachelor Marketing & Responsable Commercial
                </h4>
                <p class="text-sm text-gray-600 mb-2">IMC Metz • 2021 - 2022</p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span
                    class="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20"
                    >Bachelor</span
                  >
                  <span
                    class="px-3 py-1 bg-gray-100 text-gray-600 border border-gray-200"
                    >Marketing</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const aboutSection = ref();
const title = ref();
const intro = ref();
const presentation = ref();
const skills = ref();
const master = ref();
const bachelor = ref();

useScrollReveal(
  aboutSection,
  [
    { ref: title, direction: "up" },
    { ref: intro, direction: "up" },
    { ref: presentation, direction: "left" },
    { ref: skills, direction: "left" },
    { ref: master, direction: "right" },
    { ref: bachelor, direction: "right" },
  ],
  0.3
);
</script>
