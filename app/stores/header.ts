import { defineStore } from "pinia";

export const useMyHeaderStore = defineStore("myHeaderStore", () => {
  const background = ref<string>("bg-transparent");

  return { background };
});
