// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {},

  app: {
    layoutTransition: false,
    pageTransition: false,
  },

  css: [
    'destyle.css',
    '~/assets/scss/common/index.scss',
  ],

  modules: [],

  srcDir: 'app/',

  typescript: {
    strict: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
@use "~/assets/scss/mixin/index.scss" as *;
@use "~/assets/scss/variable/index.scss" as *;
          `,
        },
      },
    },
  },
});
