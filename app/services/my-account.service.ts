import type { GenericResponse } from "~/types/generic-response.type";

export const myAccountService = () => {
  const { $api } = useNuxtApp();

  const fetchMyAccount = async () => {
    return await $api<GenericResponse<any>>("/my-account");
  };

  return {
    fetchMyAccount,
  };
};
