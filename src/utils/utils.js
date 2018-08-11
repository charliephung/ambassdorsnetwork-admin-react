export const isEmpty = data =>
  data === undefined ||
  data === null ||
  (typeof data === "object" && Object.keys(data).length === 0) ||
  (typeof data === "array" && data.length === 0);
