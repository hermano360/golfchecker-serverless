import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import {
  ClockTime,
  DateDash,
  DateSlash,
  IsoTimeStamp,
  MonthMap,
  NumericalMonth,
} from "./types";
import { getLatestUpdatedAt } from "../updatedAt/utils";

dayjs.extend(utc);
dayjs.extend(duration);

export const CURRENT_GMT_PST_OFFSET = -7;

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
  gmtOffset = CURRENT_GMT_PST_OFFSET
): IsoTimeStamp | undefined => {
  if (!date || !teeHourTime) {
    return;
  }
  const [month, day, year]: string[] = date.split("/");

  const [hourMin, dayPeriod] = teeHourTime.split(" ");
  const isAfternoon = dayPeriod === "PM";

  const [hour, min] = hourMin.split(":");

  const teeTimeDate = `${MonthMap[month as NumericalMonth]} ${day}, ${year} ${
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

export const minutesSinceMidnight = (time: ClockTime): number => {
  const [hourMin, dayPeriod] = time.split(" ");
  const isAfternoon = dayPeriod === "PM";
  const [hour, min] = hourMin.split(":");

  const parsedHour = parseInt(hour) % 12;
  const parsedMin = parseInt(min);

  const calculatedHour = parsedHour + (isAfternoon ? 12 : 0);

  return parsedMin + calculatedHour * 60;
};

const addMinutesToDateDash = (
  referenceDateObject: dayjs.Dayjs,
  referenceTime: ClockTime
) => {
  const timeAsMinutes = minutesSinceMidnight(referenceTime);
  return referenceDateObject
    .add(timeAsMinutes, "minutes")
    .subtract(CURRENT_GMT_PST_OFFSET, "hours")
    .toISOString() as IsoTimeStamp;
};

export const getTimeStampNow = () => {
  return dayjs
    .utc()
    .subtract(CURRENT_GMT_PST_OFFSET, "hours")
    .toISOString() as IsoTimeStamp;
};
export const getTimeStampFromDateTime = (
  referenceDate: DateDash,
  referenceTime: ClockTime
) => {
  return addMinutesToDateDash(dayjs.utc(referenceDate), referenceTime);
};

export const generateDateTimeRangeList = (
  startTime: ClockTime,
  startDate: DateDash,
  endTime: ClockTime,
  endDate: DateDash
): { startsAt: IsoTimeStamp; endsAt: IsoTimeStamp }[] => {
  const dayDifference = Math.ceil(
    dayjs.duration(dayjs.utc(endDate).diff(dayjs.utc(startDate))).asDays()
  );

  const dateRange = Array(dayDifference + 1)
    .fill(0)
    .map((_, i) => {
      return dayjs.utc(startDate).add(i, "days");
    });

  const dateTimeRange = dateRange.map((dateItem) => ({
    startsAt: addMinutesToDateDash(dateItem, startTime),
    endsAt: addMinutesToDateDash(dateItem, endTime),
  }));

  return dateTimeRange;
};
