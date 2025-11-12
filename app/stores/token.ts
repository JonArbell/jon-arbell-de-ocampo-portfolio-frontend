import { defineStore } from "pinia";

export const useMyTokenStore = defineStore("myTokenStore", () => {
  const _token = useCookie("token", {
    maxAge: 3600,
    secure: true,
    path: "/",
    sameSite: "lax",
  });

  const _refreshToken = useCookie("refreshToken", {
    maxAge: 60 * 60 * 24 * 7,
    secure: true,
    path: "/",
    sameSite: "lax",
  });

  const getToken = () => _token.value;

  const setToken = (newToken: string | null) => {
    _token.value = newToken;
  };

  const clearAllTokens = () => {
    _token.value = null;
    useCookie("refreshToken").value = null;
  };

  const getRefreshToken = () => _refreshToken.value;

  const setRefreshToken = (refreshToken: string) => {
    _refreshToken.value = refreshToken;
  };

  const isAuthenticated = computed(() => !!_token.value || !!getRefreshToken());

  return {
    getToken,
    isAuthenticated,
    setToken,
    clearAllTokens,
    setRefreshToken,
    getRefreshToken,
  };
});
