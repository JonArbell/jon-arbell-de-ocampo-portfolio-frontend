import { defineStore } from "pinia";

export const useMyBreadcrumbStore = defineStore("myBreadcrumbStore", () => {
  const breadCrumb = ref<any[]>([]);

  return {
    breadCrumb,
  };
});
