// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      backendDomain: process.env.NUXT_BACKEND_DOMAIN,
    },
  },
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/scripts",
    "@vueuse/motion/nuxt",
    "@pinia/nuxt",
    "motion-v/nuxt",
  ],
});
