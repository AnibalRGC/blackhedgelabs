<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="bg-primary text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Backend Excellence with Python & Rust</h1>
          <p class="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            We build robust, scalable, and high-performance backend systems for modern applications.
          </p>
          <NuxtLink to="/contact" class="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 inline-block">
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Our Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">Backend Development</h3>
            <p class="text-gray-600">
              Custom-built backend solutions that scale with your business needs and handle complex logic efficiently.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">Python & Rust Programming</h3>
            <p class="text-gray-600">
              Leverage the flexibility of Python and the performance of Rust for optimal system design and implementation.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">System Architecture</h3>
            <p class="text-gray-600">
              Designing robust, scalable architectures that adapt to changing requirements and technical challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Home'
})
</script>