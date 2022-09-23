# Shopify Ecommerce exercise

## Setup

- I used Node v17.6.0. Node 14.18+ LTS or 16+ is required to run the project.
- Clone to local

```
npm i
npm run dev
```

App will launch on `http://localhost:5137`

## Project structure

- The app is built with [ViteJS](https://vitejs.dev) + Vue 3 + composition APIs + TypeScript
- [UnoCSS](https://github.com/unocss/unocss) is used for styling, an atomic CSS engine - similar to Tailwind but more extendible and performant
- A library called [@vueuse/core](https://vueuse.org) was used to provide composable functions such as `useSessionStorage` to micromanage the state in a simple way
- APIs, composables and components are auto imported with plugins such as `unplugin-auto-import` and `unplugin-vue-components`
- Custom interfaces are globally declared and available in every file as needed

## About

- The project loads the collections, and when selected all the products of the collection are saved in the session storage to avoid over-fetching.
- The products array is filtered based on the user selected conditions, such as sorting, items per page sort order and by category.
- When selected, each product is displayed in a modal with the detailed informations.