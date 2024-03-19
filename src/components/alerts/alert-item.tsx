"use client";

import { useCallback, useEffect, useState } from "react";
import { Alert } from "../../../sst/alerts/types";
import { fetchAlertsById } from "@/db/queries/alerts";
import { formatDateDisplay } from "@/utils/dates";
import { Course } from "../../../sst/courses/types";
import { fetchCourses } from "@/db/queries/courses";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Skeleton } from "@nextui-org/react";

interface AlertItemProps {
  alertId: string;
}

const SampleAlert = () => {
  return <Skeleton style={{ height: "90px" }} className="mb-2" />;
};
const AlertItem = ({ alertId }: AlertItemProps) => {
  const { user } = useUser();
  const userId = user?.sid;

  const [alert, setAlert] = useState<Alert | undefined>(undefined);
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchAlert = useCallback(async () => {
    if (userId) {
      const response = await fetchAlertsById(alertId, userId);
      setAlert(response);
    }
  }, [alertId, userId]);

  const fetchCourse = useCallback(async () => {
    const response = await fetchCourses();

    setCourses(response);
  }, []);

  const course = courses.find(({ id }) => id === alert?.courseId);

  useEffect(() => {
    fetchAlert();
    fetchCourse();
  }, [fetchAlert, fetchCourse]);

  return (
    <>
      {course && alert ? (
        <>
          <h1 className="text-lg mb-1">{course.name}</h1>
          <div className="text-md font-bold">{`${formatDateDisplay(
            alert.startDate
          )}  -  ${formatDateDisplay(alert.endDate)}`}</div>
          <div>{`${alert.startTime}  -  ${alert.endTime}`}</div>
        </>
      ) : (
        <SampleAlert />
      )}
    </>
  );
};

export default AlertItem;
