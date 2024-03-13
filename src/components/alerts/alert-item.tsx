"use client";

import { useCallback, useEffect, useState } from "react";
import { Alert } from "../../../sst/alerts/types";
import { fetchAlertsById } from "@/db/queries/alerts";
import { formatDateDisplay } from "@/utils/dates";
import { Course } from "../../../sst/courses/types";
import { fetchCourses } from "@/db/queries/courses";
import { useSession } from "next-auth/react";
import { Skeleton } from "@nextui-org/react";

interface AlertItemProps {
  alertId: string;
}

const SampleAlert = () => {
  return <Skeleton style={{ height: "90px" }} className="mb-2" />;
};
const AlertItem = ({ alertId }: AlertItemProps) => {
  const session = useSession();
  const userId = session.data?.user?.id;
  const [alert, setAlert] = useState<Alert | undefined>(undefined);
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchAlert = useCallback(async () => {
    if (userId) {
      const response = await fetchAlertsById(alertId, userId);
      setAlert(response);
    }
  }, [alertId, userId]);

  const fetchCourse = useCallback(async () => {
    console.log("fetch courses");
    const response = await fetchCourses();

    setCourses(response);
  }, []);

  const course = courses.find(({ id }) => id === alert?.courseId);

  useEffect(() => {
    fetchAlert();
    fetchCourse();
  }, [fetchAlert, fetchCourse]);

  console.log({ alert });
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
