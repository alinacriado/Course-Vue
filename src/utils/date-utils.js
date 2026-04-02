export const getWeekDay = (dateString) => {
  const [year, month, day] = dateString.split("-").map(Number);
  // const weekDay = new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(
  //   new Date(year, month - 1, day),
  // );
  const weekDay = new Date(year, month - 1, day).toLocaleDateString("ru-RU", { weekday: "short" });

  return weekDay[0].toUpperCase() + weekDay.slice(1);
};

