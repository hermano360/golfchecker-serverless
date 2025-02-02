import { ClockTime, MonthMap, NumericalMonth } from "../../sst/time/types";

export const alertTimeFormatter = (time: number) => {
  const isMorning = time < 720;
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours === 0 ? 12 : isMorning ? hours : hours - 12}:${minutes
    .toString()
    .padStart(2, "0")} ${isMorning ? "AM" : "PM"}`;
};

export const formatDateDisplay = (date: string | undefined): string => {
  if (!date) {
    return "";
  }

  const dateSplit = date.split("-");

  const year = dateSplit[0];
  const month = dateSplit[1] as NumericalMonth;
  const day = dateSplit[2];

  return `${MonthMap[month]} ${parseInt(day)}, ${year}`;
};

export const getClockTime = (numericTime: number): ClockTime => {
  const minutes = ((numericTime % 4) * 15).toString().padStart(2, "0");
  const hours = Math.floor(numericTime / 4);

  const isMorning = hours < 12;
  const parsedTime = hours % 12 === 0 ? 12 : hours % 12;

  return `${parsedTime}:${minutes} ${isMorning ? "AM" : "PM"}`;
};
