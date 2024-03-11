import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Match } from "../../sst/matches/types";
import { CourseId } from "../../sst/courses/types";
import { ClockTime, DateSlash, IsoTimeStamp } from "../../sst/time/types";

dayjs.extend(utc);

type Sample = Record<DateSlash, IsoTimeStamp[]>;

const example = {
  hoover: {
    "03/09/2021": ["3:00 PM"],
  },
  herbert: {
    "03/09/2021": ["3:00 PM"],
  },
};

export type CourseMatch = {
  day: DateSlash;
  times: ClockTime[];
};

export type CourseMatches = {
  courseId: CourseId;
  matches: CourseMatch[];
};

export const processMatchesByCourse = (
  matches: Match[] = []
): CourseMatches[] => {
  const courseTeeTimeMapping = {} as Record<CourseId, Sample>;

  matches.forEach((match) => {
    if (!courseTeeTimeMapping[match.courseId]) {
      courseTeeTimeMapping[match.courseId] = {} as Sample;
    }
    const teeTime = dayjs.utc(match.teeTime).subtract(8, "hours");
    const teeTimeDate = teeTime.format("MM/DD/YYYY") as DateSlash;

    if (!courseTeeTimeMapping[match.courseId][teeTimeDate]) {
      courseTeeTimeMapping[match.courseId][teeTimeDate] = [];
    }

    if (
      !courseTeeTimeMapping[match.courseId][teeTimeDate].includes(match.teeTime)
    ) {
      courseTeeTimeMapping[match.courseId][teeTimeDate].push(match.teeTime);
    }
  });

  const result = Object.entries(courseTeeTimeMapping).map((entry) => {
    const courseId = entry[0] as CourseId;
    const teeTimeMatches = entry[1] as Sample;

    return {
      courseId,
      matches: Object.entries(teeTimeMatches).map((teeTimeMatch) => {
        const day = teeTimeMatch[0] as DateSlash;
        const hourMatches = teeTimeMatch as IsoTimeStamp[];

        return {
          day,
          times: hourMatches
            .sort((a, b) => (a > b ? 1 : -1))
            .map((hour) =>
              dayjs.utc(hour).subtract(8, "hours").format("h:mm A")
            ),
        } as CourseMatch;
      }),
    };
  });

  return result;
};
