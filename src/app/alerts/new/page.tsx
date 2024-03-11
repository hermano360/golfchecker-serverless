"use server";
import AlertCreateForm from "@/components/alerts/alerts-create-form";
import { fetchCourses } from "@/db/queries/courses";

export default async function AlertsCreatePage() {
  const courses = await fetchCourses();

  return (
    <div>
      <h3 className="text-lg">Create a New Alert</h3>
      <AlertCreateForm courses={courses} />
    </div>
  );
}
