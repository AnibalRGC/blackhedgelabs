# Black Hedge Labs

A software engineering consultancy specializing in backend development with Python and Rust.

## Overview

Black Hedge Labs provides professional software engineering services with expertise in:
- Backend development
- Python and Rust programming
- System architecture
- API design and implementation
- Performance optimization

## Website Development

This repository contains the code for the [blackhedgelabs.com](https://blackhedgelabs.com) website, showcasing proof-of-concepts and research projects.

### Technology Stack

- Frontend: Nuxt.js
- Styling: Tailwind CSS
- Deployment: GitHub Pages
- CI/CD: GitHub Actions

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Setup
1. Clone this repository
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Project Structure

```
blackhedgelabs/
├── public/
│   ├── favicon.ico
├── components/
│   ├── TheHeader.vue
│   ├── TheFooter.vue
│   └── ...
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── services.vue
│   ├── projects.vue
│   └── contact.vue
├── assets/
│   └── images/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── nuxt.config.ts
├── package.json
├── tailwind.config.js
└── README.md
```

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.