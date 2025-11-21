export const formatColumn = (column: string) => {
  // Split camelCase or PascalCase into words
  const result = column
    // Insert space before capital letters
    .replace(/([A-Z])/g, " $1")
    // Capitalize first letter
    .replace(/^./, (str) => str.toUpperCase());

  return result;
};
