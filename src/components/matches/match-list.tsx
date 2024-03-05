import { fetchCourses } from "@/db/queries/courses";
import { alertTimeFormatter, formatDateDisplay } from "@/utils/dates";
import { processMatchesByCourse } from "@/utils/matches";

interface AlertListProps {
  fetchData: () => Promise<any[]>;
}

export default async function MatchList({ fetchData }: AlertListProps) {
  const matches = await fetchData();
  const courses = await fetchCourses();

  const matchesByCourse = processMatchesByCourse(matches);

  const renderedMatches = matchesByCourse.map((entry) => {
    const [courseId, matches] = entry;
    const course = courses.find(({ id }) => id === courseId);

    return (
      <div className="border rounded p-2 mb-2" key={courseId}>
        <h1 className="text-xl mb-1 font-bold">{course?.name}</h1>

        {matches.map((match) => {
          const [teeTimeDay, teeTimeSlots = []] = match;
          return (
            <div key={`${course?.name}-${match}`}>
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

  //   const renderedMatches = matchesByCourse.map(((entry), i) => {
  //     const course = courses.find(({ id }) => id === entry[0]);

  //     return (
  //         <div>{course}</div>
  //     //   <Link key={match.id || i} href={`/match/${match.id}`}>
  //     //     <div className="border rounded p-2 mb-2">
  //     //       {course ? <h1 className="text-lg mb-1">{course.name}</h1> : null}

  //     //       <div className="text-md font-bold">{`${match.teeTime}`}</div>
  //     //     </div>
  //     //   </Link>
  //     );
  //   });

  return <div className="space-y-2">{renderedMatches}</div>;
}
