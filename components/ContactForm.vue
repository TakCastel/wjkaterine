<template>
  <div id="contact" class="min-h-screen bg-white-cream p-4 md:p-8 pt-16 md:pt-24">
    <div class="max-w-3xl mx-auto">
      <!-- Header du formulaire -->
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-paprika text-purple-light mb-4">
          Contactez-moi
        </h2>
        <p class="text-text-medium text-base md:text-lg">
          Je suis disponible pour vos projets de communication et gestion administrative
        </p>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="handleSubmit" class="space-y-6 md:space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div class="form-group">
            <label for="firstName" class="block text-text-dark font-semibold mb-2 md:mb-3">
              Votre prénom *
            </label>
            <input
              id="firstName"
              v-model="form.firstName"
              type="text"
              required
              class="w-full px-3 md:px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-light focus:outline-none transition-colors"
              placeholder="Votre prénom"
            />
          </div>

          <div class="form-group">
            <label for="lastName" class="block text-text-dark font-semibold mb-2 md:mb-3">
              Votre nom *
            </label>
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              required
              class="w-full px-3 md:px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-light focus:outline-none transition-colors"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div class="form-group">
                      <label for="email" class="block text-text-dark font-semibold mb-2 md:mb-3">
              Votre email *
            </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-3 md:px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-light focus:outline-none transition-colors"
            placeholder="votre@email.com"
          />
        </div>

        <div class="form-group">
          <label for="subject" class="block text-text-dark font-semibold mb-2 md:mb-3">
            Sujet *
          </label>
          <select
            id="subject"
            v-model="form.subject"
            required
            class="w-full px-3 md:px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-light focus:outline-none transition-colors"
          >
            <option value="">Choisissez un sujet</option>
            <option value="communication">Projet de communication</option>
            <option value="gestion">Gestion administrative</option>
            <option value="reseaux">Réseaux sociaux</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div class="form-group">
                      <label for="message" class="block text-text-dark font-semibold mb-2 md:mb-3">
              Votre message *
            </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="w-full px-3 md:px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-light focus:outline-none transition-colors resize-none"
            placeholder="Décrivez votre projet et vos besoins..."
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-purple-light text-white rounded-lg font-semibold text-base md:text-lg hover:bg-purple-light/90 transition-colors duration-200 shadow-lg"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer votre message' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Ici vous pourriez ajouter la logique d'envoi réelle
  alert('Message envoyé ! (Simulation)')
  
  // Reset du formulaire
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
}
</script>

<style scoped>
.form-group {
  transition: all 0.3s ease;
}

.form-group:focus-within {
  transform: translateY(-2px);
}

input:focus, textarea:focus, select:focus {
  box-shadow: 0 0 0 3px rgba(163, 148, 255, 0.1);
}
</style> 