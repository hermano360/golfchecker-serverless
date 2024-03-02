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
  const [year, month, day] = date.split("-");

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

  return `${monthMap[month]} ${parseInt(day)}, ${year}`;
};
