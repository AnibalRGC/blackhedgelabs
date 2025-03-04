<template>
  <footer class="bg-dark text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Black Hedge Labs</h3>
          <p class="text-gray-300">
            A software engineering consultancy specializing in backend development with Python and Rust.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-gray-300">
            <li>Backend Development</li>
            <li>Python and Rust Programming</li>
            <li>System Architecture</li>
            <li>API Design</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <p class="text-gray-300">
            <a href="mailto:info@blackhedgelabs.com" class="hover:text-primary">info@blackhedgelabs.com</a>
          </p>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Black Hedge Labs. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component using Composition API with script setup
</script>