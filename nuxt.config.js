export default {
  // Target static deployment
  target: 'static',

  // For Nuxt 3, use app.baseURL instead of router.base
  app: {
    baseURL: '/blackhedgelabs/'
  },

  // Add GitHub Pages preset for Nuxt 3
  nitro: {
    preset: 'github-pages'
  },

  // Enable the Tailwind module
  modules: ['@nuxtjs/tailwindcss'],

  // Configure Tailwind module
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: false,
  },

  // Disable any auto-redirects
  redirect: {
    enabled: false
  },

  compatibilityDate: '2025-03-06'
};