import { defineStore } from "pinia";

export const useMySideBarStore = defineStore("mySideBarStore", () => {
  const isSideBarOpen = ref<boolean>(false);

  const isFirstLoad = ref<boolean>(true);

  return { isSideBarOpen, isFirstLoad };
});
