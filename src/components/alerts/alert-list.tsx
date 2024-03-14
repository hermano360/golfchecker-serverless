import { formatDateDisplay } from "@/utils/dates";
import Link from "next/link";
import { Suspense } from "react";
import DisplayCourse from "../common/display-course";
import { CourseId } from "../../../sst/courses/types";
import { formatAlerts } from "@/utils/alerts";
import { Alert } from "../../../sst/alerts/types";

interface AlertListProps {
  fetchData: () => Promise<Alert[]>;
}

export default async function AlertList({ fetchData }: AlertListProps) {
  const alerts = await fetchData();

  const formattedAlerts = formatAlerts(alerts);

  return (
    <div className="space-y-2">
      {formattedAlerts.map(({ courseId, alerts }) => (
        <div key={courseId}>
          <Suspense fallback="Loading...">
            <DisplayCourse courseId={courseId} />
          </Suspense>
          {alerts.map((alert, i) => {
            return (
              <Link key={alert.id || i} href={`/alerts/${alert.id}`}>
                <div className="border rounded p-2 mb-2 object-contain">
                  <div className="text-md font-bold">{`${formatDateDisplay(
                    alert.startDate
                  )}  -  ${formatDateDisplay(alert.endDate)}`}</div>
                  <div>{`${alert.startTime}  -  ${alert.endTime}`}</div>
                </div>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}
