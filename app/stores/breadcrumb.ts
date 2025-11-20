import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useMyBreadcrumbStore = defineStore("myBreadcrumbStore", () => {
  const breadCrumb = useStorage("myBreadcrumbStore.breadCrumb", [] as any[]);

  return {
    breadCrumb,
  };
});
