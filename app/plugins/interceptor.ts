import { useToast } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie("token");
  const refreshToken = useCookie("refreshToken");
  const toast = useToast();
  const config = useRuntimeConfig();
  const base = config.public.backendDomain;

  const api = $fetch.create({
    onRequest({ options }) {
      options.baseURL = base;

      if (token.value) {
        const headers = new Headers(options.headers || {});
        headers.set("Authorization", `Bearer ${token.value}`);
        options.headers = headers;
      }

      console.log(`Base : ${base}`);
    },

    async onResponseError({ request, response }) {
      if (response?.status === 401) {
        if (!refreshToken.value) {
          throw createError({
            statusCode: 401,
            statusMessage: "No valid token",
            data: {
              errorName: "Authentication Failed!",
            },
          });
        }

        try {
          const newToken = await $fetch<any>(`${base}/refresh-token`, {
            method: "POST",
            body: { refreshToken: refreshToken.value },
          });

          token.value = newToken.token;

          return await $fetch(request, {
            headers: { Authorization: `Bearer ${token.value}` },
          });
        } catch (error: any) {
          refreshToken.value = null;
          token.value = null;

          throw createError({
            data: {
              errorName: "Session Expired!",
            },
            statusCode: 401,
            message: "Please log in again.",
          });
        }
      }
    },

    onRequestError({ error }) {
      throw error;
    },
  });

  nuxtApp.provide("api", api);
});
