import { defineStore } from "pinia";

export const useMyMyAccountStore = defineStore("myMyAccountStore", () => {
  const myAccount = ref<any>(null);

  return { myAccount };
});
