import { fetchAlertsById } from "@/db/queries/alerts";
import { fetchCourses } from "@/db/queries/courses";
import { formatDateDisplay } from "@/utils/dates";
import AlertDeleteForm from "@/components/alerts/alerts-delete-form";

interface AlertsShowPageProps {
  params: {
    alertId: string;
  };
}

export default async function AlertsShowPage({ params }: AlertsShowPageProps) {
  const { alertId } = params;

  const alert = await fetchAlertsById(alertId);
  const courses = await fetchCourses();

  const course = courses.find(({ id }) => id === alert.courseId);

  return (
    <div className="border rounded p-2 mb-2">
      <div className="mb-2">
        {course ? <h1 className="text-lg mb-1">{course.name}</h1> : null}

        <div className="text-md font-bold">{`${formatDateDisplay(
          alert.startDate
        )}  -  ${formatDateDisplay(alert.endDate)}`}</div>
        <div>{`${alert.startTime}  -  ${alert.endTime}`}</div>
      </div>
      <AlertDeleteForm alertId={alertId} />
    </div>
  );
}
