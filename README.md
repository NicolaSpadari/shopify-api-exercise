# Shopify Ecommerce exercise

## Setup

- I used Node v17.6.0. Node 14.18+ LTS or 16+ is required to run the project.
- Clone to local

```
npm i
npm run dev
```

App will launch on `http://localhost:5137`

## About

- The app is built with [ViteJS](https://vitejs.dev) (the new official standard for Vue 3) + Vue 3 + composition APIs + TypeScript
- [UnoCSS](https://github.com/unocss/unocss) is used for styling, an atomic CSS engine - similar to Tailwind but much more extendible
- A library called [@vueuse/core](https://vueuse.org) was used to provide composable functions such as `useSessionStorage` to manage the state in a simple way
- APIs, composables and components are auto imported with plugins such as `unplugin-auto-import` and `unplugin-vue-components`

## Plugins

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - components auto import
- [unplugin-auto-import](https://github.com/antfu/unplugin-vue-components) - APIs auto import
- [vite-auto-import-resolvers](https://github.com/dishait/vite-auto-import-resolvers) - composables auto import
- [@vueuse/core](https://github.com/antfu/vueuse) - useful composition APIs
