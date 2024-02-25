export const alertTimeFormatter = (time: number) => {
  const isMorning = time < 720;
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  console.log({ hours, isMorning, minutes });

  return `${hours === 0 ? 12 : isMorning ? hours : hours - 12}:${minutes
    .toString()
    .padStart(2, "0")} ${isMorning ? "AM" : "PM"}`;
};

export const formatDateDisplay = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
