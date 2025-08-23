export const contactMeService = () => {
  const sendInquiry = async (payload: any) => {
    return await $fetch("/api/contact-me", {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { sendInquiry };
};
