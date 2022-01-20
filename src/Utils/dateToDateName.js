import dayjs from "dayjs";

// date param format YYYY-MM-DD
export const dateToDateName = (date) => {
  if (!date) return null;
  return dayjs(date).format("ddd, MMM DD");
};

export const formattedDatePickerDate = (date) => {
  if (!date) return "";

  let dateStr = date.split("-");
  // eslint-disable-next-line no-self-assign
  [dateStr[0], dateStr[1], dateStr[2]] = [dateStr[2], dateStr[1], dateStr[0]];

  const stringDate = dateToDateName(dateStr);
  if (stringDate === "Invalid Date") return "";
  return stringDate;
};
