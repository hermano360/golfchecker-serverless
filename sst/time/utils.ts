import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import { getLatestUpdatedAt } from "../updatedAt/utils";

dayjs.extend(utc);
dayjs.extend(duration);

export type DateSlash = `${number}/${number}/${number}`;

export type IsoTimeStamp =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

export type AmOrPm = "AM" | "PM";

export type ClockTime = `${number}:${number} ${AmOrPm}`;

type NumericalMonth =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";
type MonthName =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

const monthMap: Record<NumericalMonth, MonthName> = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

export const CURRENT_GMT_PST_OFFSET = -8;

export const getPstDayToday = (): DateSlash => {
  const today = dayjs
    .utc()
    .add(CURRENT_GMT_PST_OFFSET, "hours")
    .format("MM/DD/YYYY") as DateSlash;

  return today;
};

const convertOffsetToGmtOffset = (offset = 0): string => {
  const isNegative = offset < 0;
  return `GMT${isNegative ? "-" : "+"}${Math.abs(offset)
    .toString()
    .padStart(2, "0")}:00`;
};

export const parseTime = (
  date: DateSlash | undefined,
  teeHourTime: ClockTime | undefined,
  gmtOffset = -8
): IsoTimeStamp | undefined => {
  if (!date || !teeHourTime) {
    return;
  }
  const [month, day, year]: string[] = date.split("/");

  const [hourMin, dayPeriod] = teeHourTime.split(" ");
  const isAfternoon = dayPeriod === "PM";

  const [hour, min] = hourMin.split(":");

  const teeTimeDate = `${monthMap[month as NumericalMonth]} ${day}, ${year} ${
    isAfternoon ? (parseInt(hour) % 12) + 12 : hour
  }:${min}:00 ${convertOffsetToGmtOffset(gmtOffset)}`;

  return new Date(teeTimeDate).toISOString() as IsoTimeStamp;
};

export const exceedsElapsedUpdatedAt = async (
  expectedSecondsTimeout: number
): Promise<boolean> => {
  const updatedAt = await getLatestUpdatedAt();

  const secondsSinceLastUpdated = dayjs
    .duration(dayjs.utc().diff(dayjs(updatedAt)))
    .asSeconds();

  return secondsSinceLastUpdated > expectedSecondsTimeout;
};
