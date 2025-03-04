# CLAUDE.md - AI Assistant Guide

## Project: Black Hedge Labs

### Build & Development Commands
- Setup: `npm install`
- Development server: `npm run dev`
- Build for production: `npm run build`
- Generate static site: `npm run generate`
- Preview production build: `npm run preview`
- Lint code: `npm run lint`
- Run tests (when added): `npm test`
- Run a single test: `npm test -- -t "test name"`

### Code Style Guidelines
- **Formatting**: Vue Single-File Components with 2-space indentation
- **Naming**: PascalCase for components (TheHeader.vue), camelCase for JS variables/functions
- **Imports**: Group by: 1) external libs, 2) components, 3) assets/styles
- **Components**: Use Vue 3 Composition API with <script setup> for new components
- **Tailwind**: Use Tailwind utility classes instead of custom CSS when possible
- **Error handling**: Proper error boundaries and user feedback for form submissions
- **Documentation**: Include descriptions for components and complex functions

### Nuxt.js Specifics
- Use Nuxt pages for routing instead of vue-router
- Use NuxtLink instead of router-link for navigation
- Use definePageMeta for page metadata
- Use Nuxt layouts for page layouts