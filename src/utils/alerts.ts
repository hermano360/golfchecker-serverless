import { Alert } from "../../sst/alerts/types";
import { CourseId } from "../../sst/courses/types";

export const formatAlerts = (alerts: Alert[]) => {
  const alertsByCourse: Record<CourseId, Alert[]> = {} as Record<
    CourseId,
    Alert[]
  >;
  const courses: CourseId[] = [];

  alerts.forEach((alert) => {
    if (!alertsByCourse[alert.courseId]) {
      alertsByCourse[alert.courseId] = [];
      courses.push(alert.courseId);
    }
    alertsByCourse[alert.courseId].push(alert);
  });

  const formattedAlerts = courses.sort().map((courseId) => ({
    courseId,
    alerts: alertsByCourse[courseId],
  }));

  return formattedAlerts;
};
