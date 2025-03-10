<template>
  <div class="projects">
    <section class="bg-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-8">Our Projects</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Project 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">High-Performance API Gateway</h2>
              <p class="text-gray-600 mb-4">
                A Rust-based API gateway designed for ultra-low latency and high throughput,
                capable of handling millions of requests per minute with minimal resource usage.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Rust</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Tokio</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Microservices</span>
              </div>
            </div>
          </div>
          
          <!-- Project 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Distributed Task Processing System</h2>
              <p class="text-gray-600 mb-4">
                A Python-based task processing system that distributes workloads across
                multiple servers, with automatic scaling, retry logic, and monitoring.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Python</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Celery</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Redis</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">FastAPI</span>
              </div>
            </div>
          </div>
          
          <!-- Project 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Real-time Analytics Platform</h2>
              <p class="text-gray-600 mb-4">
                A hybrid Rust/Python system for processing and analyzing real-time data streams,
                with a focus on low latency and high throughput for time-series data.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Rust</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Python</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">TimescaleDB</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Kafka</span>
              </div>
            </div>
          </div>
          
          <!-- Project 4 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Secure Authentication Service</h2>
              <p class="text-gray-600 mb-4">
                A comprehensive authentication and authorization service built with
                security-first principles, supporting OAuth2, OIDC, and custom auth flows.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Rust</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">OAuth2</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">JWT</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Projects'
})
</script>