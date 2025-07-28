<template>
  <section
    id="skills"
    ref="skillsSection"
    class="relative min-h-screen py-24 px-6 bg-gray-50"
  >
    <div class="max-w-7xl mx-auto">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6"
        >
          Mes Compétences
        </h2>
        <p
          class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Un ensemble de compétences complémentaires pour accompagner vos
          projets de communication et de gestion administrative.
        </p>
      </div>

      <!-- Accordéon des compétences -->
      <div class="max-w-4xl mx-auto space-y-4">
        <div
          v-for="(theme, index) in skillThemes"
          :key="index"
          :data-accordion="index"
          class="bg-white border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- En-tête de l'accordéon -->
          <button
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 border-b-2 border-gray-100"
            @click="toggleTheme(index)"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-10 h-10 bg-primary flex items-center justify-center transform rotate-12 transition-transform duration-300"
                :class="{ 'rotate-0': openTheme === index }"
              >
                <Icon :name="theme.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-lg">
                  {{ theme.title }}
                </h3>
                <p class="text-sm text-gray-600 mt-1">{{ theme.subtitle }}</p>
              </div>
            </div>
            <div
              class="w-6 h-6 bg-gray-100 flex items-center justify-center transform -rotate-12 transition-all duration-300"
              :class="{ 'rotate-0': openTheme === index }"
            >
              <Icon
                :name="
                  openTheme === index
                    ? 'lucide:chevron-up'
                    : 'lucide:chevron-down'
                "
                class="w-4 h-4 text-gray-600 transition-transform duration-300"
                :class="{ 'rotate-180': openTheme === index }"
              />
            </div>
          </button>

          <!-- Contenu de l'accordéon -->
          <Transition
            name="accordion"
            mode="out-in"
            @before-leave="onBeforeLeave"
            @enter="onEnter"
            @leave="onLeave"
          >
            <div v-if="openTheme === index" class="border-t-2 border-gray-100">
              <div class="p-6 space-y-4">
                <TransitionGroup name="skill-item" tag="div" class="space-y-4">
                  <div
                    v-for="(skill, skillIndex) in theme.skills"
                    :key="skillIndex"
                    class="flex items-start gap-4 p-4 bg-gray-50 border-l-4 border-primary hover:border-l-6 transition-all duration-300"
                    :style="{ animationDelay: `${skillIndex * 0.1}s` }"
                  >
                    <div
                      class="w-8 h-8 bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0 transform rotate-6 transition-transform duration-300"
                    >
                      <Icon :name="skill.icon" class="w-5 h-5" />
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-gray-900 text-base mb-2">
                        {{ skill.name }}
                      </h4>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        {{ skill.description }}
                      </p>
                    </div>
                  </div>
                </TransitionGroup>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Call-to-action -->
      <div class="text-center mt-20">
        <p class="text-gray-600 mb-8">Vous avez un projet ? Parlons-en !</p>
        <a
          href="#contact"
          class="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-bold transform rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-primary hover:border-gray-900"
        >
          <Icon name="lucide:mail" class="w-6 h-6" />
          Me contacter
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const openTheme = ref<number | null>(0); // Premier accordéon ouvert par défaut

const toggleTheme = (index: number) => {
  openTheme.value = openTheme.value === index ? null : index;
};

const onBeforeLeave = (el: Element) => {
  const height = el.scrollHeight;
  (el as HTMLElement).style.height = height + "px";
  (el as HTMLElement).style.overflow = "hidden";
  (el as HTMLElement).style.transition = "height 0.6s ease-in";
};

const onEnter = (el: Element) => {
  const height = el.scrollHeight;
  (el as HTMLElement).style.height = "0px";
  (el as HTMLElement).style.overflow = "hidden";

  requestAnimationFrame(() => {
    (el as HTMLElement).style.height = height + "px";
    (el as HTMLElement).style.transition = "height 0.6s ease-out";
  });
};

const onLeave = (el: Element) => {
  (el as HTMLElement).style.height = (el as HTMLElement).scrollHeight + "px";
  (el as HTMLElement).style.overflow = "hidden";

  requestAnimationFrame(() => {
    (el as HTMLElement).style.height = "0px";
    (el as HTMLElement).style.transition = "height 0.6s ease-in";
  });
};

const skillThemes = [
  {
    title: "Communication & Marketing",
    subtitle: "Stratégies de communication et techniques marketing",
    icon: "fluent:megaphone-24-filled",
    skills: [
      {
        name: "Social Media Management",
        icon: "fluent-emoji:mobile-phone",
        description:
          "Gestion complète des réseaux sociaux : création de contenu, planification, animation de communauté et analyse des performances.",
      },
      {
        name: "Stratégie Marketing",
        icon: "fluent-emoji:bullseye",
        description:
          "Développement de stratégies commerciales, études de marché, positionnement de marque et plans d'action marketing.",
      },
      {
        name: "Communication Digitale",
        icon: "fluent-emoji:speech-balloon",
        description:
          "Rédaction de contenu web, newsletters, communication corporate et gestion de l'image de marque.",
      },
    ],
  },
  {
    title: "Gestion de Projet",
    subtitle: "Coordination et suivi de projets",
    icon: "fluent:checkmark-square-24-filled",
    skills: [
      {
        name: "Coordination de Projet",
        icon: "fluent-emoji:busts-in-silhouette",
        description:
          "Planification, organisation et suivi de projets avec gestion des délais, budgets et équipes.",
      },
      {
        name: "Gestion Administrative",
        icon: "fluent-emoji:page-facing-up",
        description:
          "Suivi administratif, reporting, gestion documentaire et optimisation des processus internes.",
      },
      {
        name: "Négociation Commerciale",
        icon: "fluent-emoji:handshake",
        description:
          "Techniques de négociation, gestion de la relation client et développement commercial.",
      },
    ],
  },
  {
    title: "Création & Design",
    subtitle: "Outils de création et mise en page",
    icon: "fluent:paint-brush-24-filled",
    skills: [
      {
        name: "PAO & Design",
        icon: "fluent-emoji:frame-with-picture",
        description:
          "Création graphique, mise en page, design de supports de communication et chartes graphiques.",
      },
      {
        name: "Outils Créatifs",
        icon: "fluent-emoji:sparkles",
        description:
          "Maîtrise de Canva, Adobe Express, CapCut et autres outils de création de contenu visuel.",
      },
      {
        name: "Rédaction Web",
        icon: "fluent-emoji:writing-hand",
        description:
          "Rédaction de contenu web, SEO, articles de blog et supports de communication.",
      },
    ],
  },
  {
    title: "Outils & Technologies",
    subtitle: "Maîtrise des outils professionnels",
    icon: "fluent:settings-24-filled",
    skills: [
      {
        name: "Suite Microsoft Office",
        icon: "fluent-emoji:bar-chart",
        description:
          "Excel, Word, PowerPoint, Outlook pour la gestion documentaire et l'analyse de données.",
      },
      {
        name: "Google Workspace",
        icon: "fluent-emoji:cloud",
        description:
          "Drive, Docs, Sheets, Slides pour la collaboration et le partage de documents.",
      },
      {
        name: "Outils de Gestion",
        icon: "fluent-emoji:wrench",
        description:
          "Notion, MailChimp, outils CRM et logiciels de gestion de projet.",
      },
    ],
  },
];
</script>

<style scoped>
.accordion-enter-active {
  transition: all 0.6s ease-out;
}

.accordion-leave-active {
  transition: all 0.6s ease-in;
}

.accordion-enter-from {
  opacity: 0;
  transform: translateY(-30px);
  max-height: 0;
}

.accordion-enter-to {
  opacity: 1;
  transform: translateY(0);
  max-height: 1000px;
}

.accordion-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 1000px;
}

.accordion-leave-to {
  opacity: 0;
  transform: translateY(-30px);
  max-height: 0;
}

.skill-item-enter-active {
  transition: all 0.5s ease-out;
}

.skill-item-leave-active {
  transition: all 0.4s ease-in;
}

.skill-item-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.skill-item-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.skill-item-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.skill-item-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.skill-item-move {
  transition: transform 0.5s ease;
}
</style>
