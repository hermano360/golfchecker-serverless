import { NumericalMonth } from "../../sst/time/types";
import { MonthMap } from "../../sst/time/utils";

export const alertTimeFormatter = (time: number) => {
  const isMorning = time < 720;
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  console.log({ hours, isMorning, minutes });

  return `${hours === 0 ? 12 : isMorning ? hours : hours - 12}:${minutes
    .toString()
    .padStart(2, "0")} ${isMorning ? "AM" : "PM"}`;
};

export const formatDateDisplay = (date: string) => {
  const dateSplit = date.split("-");

  const year = date[0];
  const month = date[1] as NumericalMonth;
  const day = date[2];

  return `${MonthMap[month]} ${parseInt(day)}, ${year}`;
};
