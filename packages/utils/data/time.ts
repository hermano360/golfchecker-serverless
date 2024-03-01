const monthMap = {
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

export const parseTime = (
  date = "",
  teeHourTime = "",
  gmtOffset = "GMT-08:00"
) => {
  const [month, day, year] = date.split("/");

  const [hourMin, dayPeriod] = teeHourTime.split(" ");
  const isAfternoon = dayPeriod === "PM";

  const [hour, min] = hourMin.split(":");

  const teeTimeDate = `${monthMap[month]} ${day}, ${year} ${
    isAfternoon ? (parseInt(hour) % 12) + 12 : hour
  }:${min}:00 ${gmtOffset}`;

  return new Date(teeTimeDate).toISOString();
};
