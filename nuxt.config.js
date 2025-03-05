export default {
  // Target static deployment
  target: 'static',
  
  // Set the base URL for GitHub Pages
  // Replace 'blackhedgelabs' with your repository name if different
  router: {
    base: '/blackhedgelabs/'
  },
  
  // Add GitHub Pages preset for Nuxt 3
  nitro: {
    preset: 'github-pages'
  },

  // Other configurations...
} 