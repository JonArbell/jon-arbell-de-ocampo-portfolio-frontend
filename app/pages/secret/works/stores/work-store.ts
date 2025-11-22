import { defineStore } from "pinia";

export const useMyWorkStoreStore = defineStore("myWorkStoreStore", () => {
  const selectedWork = ref<any>(null);

  return { selectedWork };
});
