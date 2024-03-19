import { CourseName } from "../courses/types";
import { DateSlash, IsoTimeStamp } from "../time/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import duration from "dayjs/plugin/duration";

dayjs.extend(utc);
dayjs.extend(duration);

export const runFetchingPerCourses = async (
  courses: CourseName[] = [],
  date: DateSlash,
  days: number
) => {
  console.log({ courses, date, days });
};

export function splitIntoGroups<TypeInfo>(
  instances: TypeInfo[],
  groups: number
): TypeInfo[][] {
  const groupArray = Array(groups).fill(undefined);

  for (let index = 0; index < instances.length; index++) {
    if (!groupArray[index % groups]) {
      groupArray[index % groups] = [];
    }

    console.log(groupArray);
    groupArray[index % groups].push(instances[index]);
  }

  return groupArray;
}

export type ScrapeRequestData = {
  date: DateSlash;
  updatedAt: IsoTimeStamp;
  courses: CourseName[];
};

export const generateScrapeRequests = (
  date: DateSlash,
  days: number,
  updatedAt: IsoTimeStamp,
  coursesGroups: CourseName[][]
): ScrapeRequestData[] => {
  const dayArray = Array(days + 1).fill(0);

  const result = coursesGroups.reduce(
    (totalCourseDays: ScrapeRequestData[], courses) => {
      const samples = dayArray.reduce(
        (totalDays: ScrapeRequestData[], _, index) => {
          const calculatedDate = dayjs
            .utc(date)
            .add(index, "days")
            .format("MM/DD/YYYY") as DateSlash;
          const newElement: ScrapeRequestData = {
            date: calculatedDate,
            updatedAt,
            courses,
          };

          return [...totalDays, newElement];
        },
        []
      );

      return [...totalCourseDays, ...samples];
    },
    []
  );

  return result;
};
