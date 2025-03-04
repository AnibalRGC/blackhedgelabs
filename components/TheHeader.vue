<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-6">
        <div class="flex items-center">
          <NuxtLink to="/" class="font-bold text-xl text-primary">
            Black Hedge Labs
          </NuxtLink>
        </div>
        <nav class="flex space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-primary font-medium">Home</NuxtLink>
          <NuxtLink to="/services" class="text-gray-700 hover:text-primary font-medium">Services</NuxtLink>
          <NuxtLink to="/projects" class="text-gray-700 hover:text-primary font-medium">Projects</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-primary font-medium">Contact</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Header component using Composition API with script setup
</script>