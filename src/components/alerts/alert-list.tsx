import { fetchCourses } from "@/db/queries/courses";
import { alertTimeFormatter, formatDateDisplay } from "@/utils/dates";
import { Alert } from "@prisma/client";
import Link from "next/link";

interface AlertListProps {
  fetchData: () => Promise<Alert[]>;
}

export default async function AlertList({ fetchData }: AlertListProps) {
  const alerts = await fetchData();
  const courses = await fetchCourses();

  const renderedAlerts = alerts.map((alert, i) => {
    const course = courses.find(({ id }) => id === alert.courseId);

    return (
      <Link key={alert.id || i} href={`/alerts/${alert.id}`}>
        <div className="border rounded p-2 mb-2">
          {course ? <h1 className="text-lg mb-1">{course.name}</h1> : null}

          <div className="text-md font-bold">{`${formatDateDisplay(
            alert.startDate
          )}  -  ${formatDateDisplay(alert.endDate)}`}</div>
          <div>{`${alert.startTime}  -  ${alert.endTime}`}</div>
        </div>
      </Link>
    );
  });

  return <div className="space-y-2">{renderedAlerts}</div>;
}
