export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "POST") {
    throw createError({
      statusCode: 405,
      message: "Method Not Allowed",
    });
  }

  const config = useRuntimeConfig();

  const body = await readBody(event);

  const response = await $fetch(
    `${config.public.backendDomain}/email-inquiry`,
    {
      method: "POST",
      body: body,
    }
  );

  return response;
});
