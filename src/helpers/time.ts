export const timeFullTH = (date: Date) => {
  const options: {
    weekday: string;
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
  } = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleDateString("th-TH", options);
};
