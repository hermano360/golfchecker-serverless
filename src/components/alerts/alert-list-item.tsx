"use client";

import { formatDateDisplay } from "@/utils/dates";
import { Alert } from "../../../sst/alerts/types";
import AlertDeleteForm from "./alerts-delete-form";
import AlertEditNotificationForm from "./alerts-edit-notification-form";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

interface AlertListItemProps {
  alert: Alert;
}

export default function AlertListItem({ alert }: AlertListItemProps) {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [alert]);
  return (
    <div className="border rounded p-2 mb-2 object-contain flex flex-row justify-between">
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="text-md font-bold">{`${formatDateDisplay(
              alert.startDate
            )}  -  ${formatDateDisplay(alert.endDate)}`}</div>
            <div>{`${alert.startTime}  -  ${alert.endTime}`}</div>
          </div>

          <div className={`flex flex-row`}>
            <div className="mr-2">
              <AlertEditNotificationForm
                alertId={alert.id}
                allowNotification={alert.allowNotification}
                handleSubmit={setLoading}
              />
            </div>
            <div>
              <AlertDeleteForm alertId={alert.id} handleSubmit={setLoading} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
