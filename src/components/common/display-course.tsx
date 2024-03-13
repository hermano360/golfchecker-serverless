import { fetchCourses } from "@/db/queries/courses";
import { CourseId } from "../../../sst/courses/types";

interface AlertsShowPageProps {
  courseId: CourseId;
}

export default async function DisplayCourse({ courseId }: AlertsShowPageProps) {
  const courses = await fetchCourses();

  const course = courses.find(({ id }) => id === courseId);

  if (!course) return null;

  return <h1 className="text-lg mb-1">{course.name}</h1>;
}
