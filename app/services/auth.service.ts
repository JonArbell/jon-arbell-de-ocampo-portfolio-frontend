import type { GenericResponse } from "~/types/generic-response.type";

interface LoginResponse extends GenerateTokenResponse {
  refreshToken: string;
}

interface GenerateTokenResponse {
  token: string;
}

export const authService = () => {
  const { $api } = useNuxtApp();

  const login = async (body: any) => {
    return await $api<GenericResponse<LoginResponse>>("/auth/login", {
      method: "POST",
      body: body,
    });
  };

  const generateNewToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken") || "";

    return await $api<GenericResponse<GenerateTokenResponse>>(
      "/auth/refresh-token",
      {
        method: "POST",
        body: {
          refreshToken: refreshToken,
        },
      }
    );
  };

  return { login, generateNewToken };
};
