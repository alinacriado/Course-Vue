export const getWeekDay = (dateString, lenghtFormat) => {
  if (!dateString) {
    return '';
  }

  const [year, month, day] = dateString.split("-").map(Number);
  const weekDay = new Date(year, month - 1, day).toLocaleDateString("ru-RU", { weekday: lenghtFormat });

  return weekDay[0].toUpperCase() + weekDay.slice(1);
};

export const getFormatedDate = (dateString) => {
  if (!dateString) {
    return '';
  }
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).replace(' г.', '');
}

