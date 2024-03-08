export type DateSlash = `${number}/${number}/${number}`;
export type DateDash = `${number}-${number}-${number}`;

export type IsoTimeStamp =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

export type AmOrPm = "AM" | "PM";

export type ClockTime = `${number}:${number} ${AmOrPm}`;

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
