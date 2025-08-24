import { useMySideBarStore } from "~/stores/side-bar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    const sidebarStore = useMySideBarStore();
    sidebarStore.isSideBarOpen = false;

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 50);
  });
});
