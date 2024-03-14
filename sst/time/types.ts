export type DateSlash = `${number}/${number}/${number}`;
export type DateDash = `${number}-${number}-${number}`;

export type IsoTimeStamp =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

export type AmOrPm = "AM" | "PM";

export type ClockTime = `${string}:${string} ${AmOrPm}`;

export type NumericalMonth =
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

export type MonthName =
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

export const MonthMap: Record<NumericalMonth, MonthName> = {
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
