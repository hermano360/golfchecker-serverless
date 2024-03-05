import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const processMatchesByCourse = (matches = []) => {
  const courseTeeTimeMapping = {};

  matches.forEach((match) => {
    if (!courseTeeTimeMapping[match.courseId]) {
      courseTeeTimeMapping[match.courseId] = [];
    }
    const teeTime = dayjs.utc(match.teeTime).subtract(8, "hours");
    const teeTimeDate = teeTime.format("MM/DD/YYYY");

    if (!courseTeeTimeMapping[match.courseId][teeTimeDate]) {
      courseTeeTimeMapping[match.courseId][teeTimeDate] = [];
    }

    if (
      !courseTeeTimeMapping[match.courseId][teeTimeDate].includes(match.teeTime)
    ) {
      courseTeeTimeMapping[match.courseId][teeTimeDate].push(match.teeTime);
    }
  });

  const result = Object.entries(courseTeeTimeMapping).map((entry = []) => {
    const [courseId, teeTimeMatches = {}] = entry;

    return [
      courseId,
      Object.entries(teeTimeMatches).map((teeTimeMatch) => {
        const [day, hourMatches = []] = teeTimeMatch;

        return [
          day,
          hourMatches
            .sort((a, b) => (a > b ? 1 : -1))
            .map((hour) =>
              dayjs.utc(hour).subtract(8, "hours").format("h:mm A")
            ),
        ];
      }),
    ];
  });

  return result;
};
