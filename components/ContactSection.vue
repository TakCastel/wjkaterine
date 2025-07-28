<template>
  <section
    id="contact"
    ref="contactSection"
    class="relative min-h-screen py-24 px-6 bg-white"
  >
    <div class="max-w-4xl mx-auto">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6"
        >
          Contact
        </h2>
        <p
          class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Disponible et réactive, je serais ravie de mettre mes compétences au
          service de votre équipe et d'échanger sur vos besoins.
        </p>
      </div>

      <!-- Formulaire de contact -->
      <div class="bg-gray-50 border-2 border-gray-200 p-8 md:p-12">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <!-- Nom et Prénom -->
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label
                for="firstName"
                class="block text-sm font-bold text-gray-700 mb-3"
              >
                Prénom *
              </label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="w-full px-4 py-3 border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                :class="{ 'border-red-500': errors.firstName }"
                placeholder="Votre prénom"
              />
              <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">
                {{ errors.firstName }}
              </p>
            </div>

            <div>
              <label
                for="lastName"
                class="block text-sm font-bold text-gray-700 mb-3"
              >
                Nom *
              </label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                class="w-full px-4 py-3 border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                :class="{ 'border-red-500': errors.lastName }"
                placeholder="Votre nom"
              />
              <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">
                {{ errors.lastName }}
              </p>
            </div>
          </div>

          <!-- Email -->
          <div>
            <label
              for="email"
              class="block text-sm font-bold text-gray-700 mb-3"
            >
              Email *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
              :class="{ 'border-red-500': errors.email }"
              placeholder="votre.email@exemple.com"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">
              {{ errors.email }}
            </p>
          </div>

          <!-- Sujet -->
          <div>
            <label
              for="subject"
              class="block text-sm font-bold text-gray-700 mb-3"
            >
              Sujet *
            </label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
              :class="{ 'border-red-500': errors.subject }"
              placeholder="Objet de votre message"
            />
            <p v-if="errors.subject" class="text-red-500 text-sm mt-1">
              {{ errors.subject }}
            </p>
          </div>

          <!-- Message -->
          <div>
            <label
              for="message"
              class="block text-sm font-bold text-gray-700 mb-3"
            >
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              class="w-full px-4 py-3 border-2 border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 resize-none"
              :class="{ 'border-red-500': errors.message }"
              placeholder="Décrivez votre projet ou votre demande..."
            />
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">
              {{ errors.message }}
            </p>
          </div>

          <!-- reCAPTCHA -->
          <div class="flex justify-center">
            <div class="g-recaptcha" data-sitekey="6LcXXXXXXXXXX" />
          </div>

          <!-- Bouton d'envoi -->
          <div class="text-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold border-2 border-primary hover:border-gray-900 transform rotate-1 hover:rotate-0 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon
                v-if="isSubmitting"
                name="lucide:loader-2"
                class="w-6 h-6 animate-spin"
              />
              <Icon v-else name="lucide:send" class="w-6 h-6" />
              {{ isSubmitting ? "Envoi en cours..." : "Envoyer le message" }}
            </button>
          </div>

          <!-- Message de succès/erreur -->
          <div
            v-if="submitMessage"
            class="text-center p-4 border-2"
            :class="
              submitMessage.type === 'success'
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-red-50 text-red-700 border-red-200'
            "
          >
            {{ submitMessage.text }}
          </div>
        </form>
      </div>

      <!-- Informations de contact alternatives -->
      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-6">Ou contactez-moi directement :</p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:wagnerjoye.katerine@gmail.com"
            class="inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-colors duration-200 transform hover:rotate-1"
          >
            <Icon name="lucide:mail" class="w-5 h-5" />
            wagnerjoye.katerine@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/katerine-wagner-joye/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-colors duration-200 transform hover:-rotate-1"
          >
            <Icon name="lucide:linkedin" class="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

// État du formulaire
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});

// État de validation
const errors = reactive({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});

// État de soumission
const isSubmitting = ref(false);
const submitMessage = ref<{ type: "success" | "error"; text: string } | null>(
  null
);

// Validation des champs
const validateField = (field: string, value: string) => {
  switch (field) {
    case "firstName":
    case "lastName":
      if (!value.trim()) {
        errors[field] = "Ce champ est requis";
        return false;
      }
      if (value.length < 2) {
        errors[field] = "Minimum 2 caractères";
        return false;
      }
      break;
    case "email":
      if (!value.trim()) {
        errors.email = "L'email est requis";
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors.email = "Format d'email invalide";
        return false;
      }
      break;
    case "subject":
      if (!value.trim()) {
        errors.subject = "Le sujet est requis";
        return false;
      }
      if (value.length < 5) {
        errors.subject = "Minimum 5 caractères";
        return false;
      }
      break;
    case "message":
      if (!value.trim()) {
        errors.message = "Le message est requis";
        return false;
      }
      if (value.length < 10) {
        errors.message = "Minimum 10 caractères";
        return false;
      }
      break;
  }
  errors[field] = "";
  return true;
};

// Gestion de la soumission
const handleSubmit = async () => {
  // Validation de tous les champs
  const fields = ["firstName", "lastName", "email", "subject", "message"];
  let isValid = true;

  fields.forEach((field) => {
    if (!validateField(field, form[field])) {
      isValid = false;
    }
  });

  if (!isValid) return;

  isSubmitting.value = true;

  // Simulation d'envoi (remplacer par votre logique d'envoi)
  setTimeout(() => {
    isSubmitting.value = false;
    submitMessage.value = {
      type: "success",
      text: "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
    };

    // Reset du formulaire
    Object.keys(form).forEach((key) => {
      form[key] = "";
    });
  }, 2000);
};
</script>
