import { defineNuxtPlugin } from "#app";
import mdiVue from "mdi-vue";
import * as mdijs from "@mdi/js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(mdiVue, {
    icons: mdijs,
  });
});
