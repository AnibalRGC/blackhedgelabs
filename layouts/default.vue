<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>