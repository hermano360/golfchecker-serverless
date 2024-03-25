import { formatDateDisplay } from "@/utils/dates";
import Link from "next/link";
import { Suspense } from "react";
import DisplayCourse from "../common/display-course";
import { formatAlerts } from "@/utils/alerts";
import { Alert } from "../../../sst/alerts/types";
import AlertDeleteForm from "./alerts-delete-form";
import AlertEditNotificationForm from "./alerts-edit-notification-form";
import AlertListItem from "./alert-list-item";
import { Spinner } from "@nextui-org/react";

interface AlertListProps {
  fetchData: () => Promise<Alert[]>;
}

export default async function AlertList({ fetchData }: AlertListProps) {
  const alerts = await fetchData();

  const formattedAlerts = formatAlerts(alerts);

  return (
    <div className="space-y-2 ">
      {formattedAlerts.map(({ courseId, alerts }) => (
        <div key={courseId}>
          <Suspense
            fallback={
              <div className="text-lg font-bold text-center mt-3">
                <Spinner />
              </div>
            }
          >
            <DisplayCourse courseId={courseId} />
          </Suspense>

          {alerts.map((alert) => (
            <AlertListItem alert={alert} key={alert.id} />
          ))}
        </div>
      ))}
      {formattedAlerts.length === 0 && (
        <div className="text-lg font-bold text-center mt-3">
          Currently No Active Alerts...
        </div>
      )}
    </div>
  );
}
