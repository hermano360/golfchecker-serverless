import { useCallback, useEffect, useState } from "react";
import { Course } from "../../sst/courses/types";
import { fetchCourses } from "@/db/queries/courses";

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const retrieveCourses = useCallback(async () => {
    const courses = await fetchCourses();

    setCourses(courses);
  }, [setCourses]);

  useEffect(() => {
    retrieveCourses();
  }, [retrieveCourses]);

  return courses;
};
