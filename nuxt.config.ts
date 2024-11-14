import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  devServer: {
    port: 9999,
  },
  bridge: {
    vite: true,
    nitro: true,
  },

  compatibilityDate: "2024-11-09",
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  css: ["@/assets/index.css"],
});
