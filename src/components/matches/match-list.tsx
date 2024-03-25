import { fetchCourses } from "@/db/queries/courses";
import { processMatchesByCourse } from "@/utils/matches";
import { Match } from "../../../sst/matches/types";

interface AlertListProps {
  fetchData: () => Promise<Match[]>;
}

export default async function MatchList({ fetchData }: AlertListProps) {
  const matches = await fetchData();
  const courses = await fetchCourses();

  const matchesByCourse = processMatchesByCourse(matches);

  const renderedMatches = matchesByCourse.map((entry) => {
    const { courseId, matches } = entry;
    const course = courses.find(({ id }) => id === courseId);

    return (
      <div className="border rounded p-2 mb-2" key={courseId}>
        <h1 className="text-xl mb-1 font-bold">{course?.name}</h1>

        {matches.map((match) => {
          const { day: teeTimeDay, times: teeTimeSlots = [] } = match;
          return (
            <div key={`${course?.name}-${match.day}`}>
              <h1 className="text-lg mb-1">{teeTimeDay}</h1>
              <div className="flex flex-row flex-wrap">
                {teeTimeSlots.map((teeTimeHour) => {
                  return (
                    <div
                      className="border rounded p-2 m-2"
                      key={`${course?.name}${teeTimeDay}${teeTimeHour}`}
                    >
                      {teeTimeHour}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="space-y-2">
      {renderedMatches}

      {matchesByCourse.length === 0 && (
        <div className="text-lg font-bold text-center mt-3">
          Currently No Active Matches...
        </div>
      )}
    </div>
  );
}
