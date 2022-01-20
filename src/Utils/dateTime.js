import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

// Return timestamp in UTC
export const getTimeStamp = (date) => {
  const [day, month, year] = date?.split("-");
  date = new Date(year, month - 1, day);
  // TODO: This is to match the timestamps of hotels for search
  // Since it depends on machine's local, added few popular options as of now:
  // return dayjs(date).utc().startOf("day").add(15, "hour").unix();
  // return dayjs(date).utc().startOf("day").add(14, "hour").unix();
  return dayjs(date).utc().startOf("day").add(9, "hour").add(30, "minutes").unix();
};

const pad = (digit) => {
  const digitNum = parseInt(digit);
  return digitNum < 10 ? `0${digitNum}` : `${digitNum}`;
};

export const getDateInFormat = (date) => {
  const [day, month, year] = date.split("-");
  return `${year}-${pad(month)}-${pad(day)}`;
};
