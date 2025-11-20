export const formatYearMonth = (ym: string) => {
  const [year, month] = ym.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleString("en-PH", { month: "short", year: "numeric" });
};
