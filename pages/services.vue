<template>
  <div class="services">
    <section class="bg-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-8">Our Services</h1>
        
        <div class="space-y-12">
          <!-- Backend Development -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Backend Development</h2>
            <p class="text-gray-600 mb-6">
              Our team specializes in creating robust, scalable backend systems that power modern applications.
              We focus on building maintainable codebases that can grow with your business.
            </p>
            <h3 class="text-lg font-medium mb-2">Technologies:</h3>
            <ul class="list-disc pl-5 text-gray-600">
              <li>Django & FastAPI for Python-based services</li>
              <li>Actix-web & Rocket for Rust-based services</li>
              <li>PostgreSQL, MySQL, MongoDB databases</li>
              <li>Redis for caching and real-time operations</li>
              <li>RabbitMQ & Kafka for message queuing</li>
            </ul>
          </div>
          
          <!-- System Architecture -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">System Architecture</h2>
            <p class="text-gray-600 mb-6">
              We design and implement system architectures that prioritize scalability, reliability,
              and maintainability. Our solutions consider both current requirements and future growth.
            </p>
            <h3 class="text-lg font-medium mb-2">Approaches:</h3>
            <ul class="list-disc pl-5 text-gray-600">
              <li>Microservices architecture</li>
              <li>Event-driven systems</li>
              <li>Serverless architectures</li>
              <li>Distributed systems design</li>
              <li>High-availability deployments</li>
            </ul>
          </div>
          
          <!-- Performance Optimization -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Performance Optimization</h2>
            <p class="text-gray-600 mb-6">
              We analyze and optimize existing systems to improve performance, reduce costs,
              and enhance user experience. Our data-driven approach identifies bottlenecks
              and implements targeted improvements.
            </p>
            <h3 class="text-lg font-medium mb-2">Optimization Areas:</h3>
            <ul class="list-disc pl-5 text-gray-600">
              <li>Database query optimization</li>
              <li>API response time improvements</li>
              <li>Memory usage and CPU optimization</li>
              <li>Caching strategies</li>
              <li>Load balancing and scaling solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Services'
})
</script>