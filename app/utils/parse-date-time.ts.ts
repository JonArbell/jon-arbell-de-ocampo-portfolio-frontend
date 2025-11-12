export const parseLocalDateTime = (dateTime: string) => {
  if (!dateTime) return "";
  const d = new Date(dateTime);
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};
