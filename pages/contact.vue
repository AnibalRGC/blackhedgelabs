<template>
  <div class="contact">
    <section class="bg-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
            <p class="text-gray-600 mb-6">
              Interested in working with Black Hedge Labs? We'd love to hear from you!
              Fill out the form or reach out directly via email.
            </p>
            
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium mb-2">Email</h3>
                <p class="text-gray-600">
                  <a href="mailto:info@blackhedgelabs.com" class="text-primary hover:underline">
                    info@blackhedgelabs.com
                  </a>
                </p>
              </div>
              
              <div>
                <h3 class="text-lg font-medium mb-2">Location</h3>
                <p class="text-gray-600">
                  Remote-first company with team members across the globe
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <form class="bg-white p-8 rounded-lg shadow-md" @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                  required
                >
              </div>
              
              <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                  required
                >
              </div>
              
              <div class="mb-4">
                <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                  required
                >
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="5" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="w-full bg-primary text-white py-3 px-4 rounded-md font-medium hover:bg-secondary transition duration-300"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>

              <div v-if="formStatus" class="mt-4 p-3 rounded" :class="formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                {{ formStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

definePageMeta({
  title: 'Contact'
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const formStatus = ref(null)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // In a real app, you would send the form data to a backend API
    // await $fetch('/api/contact', { method: 'POST', body: form })
    
    // Simulate API request with setTimeout
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    formStatus.value = {
      type: 'success',
      message: 'Your message has been sent successfully. We\'ll get back to you soon!'
    }
    
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: 'There was an error sending your message. Please try again later.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>