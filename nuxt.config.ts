import { defineNuxtConfig } from 'nuxt';
import { resolve } from 'path';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  alias: {
    '~': resolve(__dirname, './'),
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  }
});
