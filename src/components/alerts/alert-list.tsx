import { formatDateDisplay } from "@/utils/dates";
import { Alert } from "@prisma/client";
import Link from "next/link";
import { Suspense } from "react";
import DisplayCourse from "../common/display-course";
import { CourseId } from "../../../sst/courses/types";

interface AlertListProps {
  fetchData: () => Promise<Alert[]>;
}

export default async function AlertList({ fetchData }: AlertListProps) {
  const alerts = await fetchData();

  const renderedAlerts = alerts.map((alert, i) => {
    return (
      <Link key={alert.id || i} href={`/alerts/${alert.id}`}>
        <div className="border rounded p-2 mb-2">
          <Suspense>
            <DisplayCourse courseId={alert.courseId as CourseId} />
          </Suspense>

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
