"use client";

import { useState, useCallback, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { fetchCourses } from "@/db/queries/courses";
import { Course } from "../../../sst/courses/types";

interface AlertCreateFormProps {
  errors?: string[];
}

export default function CourseSelector({ errors }: AlertCreateFormProps) {
  const [courses, setCourses] = useState<Course[]>([]);

  const retrieveCourses = useCallback(async () => {
    const courses = await fetchCourses();

    setCourses(courses);
  }, [setCourses]);

  useEffect(() => {
    retrieveCourses();
  }, [retrieveCourses]);

  return (
    <Select
      label="Select Course"
      name="courseId"
      isInvalid={!!errors}
      errorMessage={errors?.join(", ")}
    >
      {courses.map((course) => (
        <SelectItem key={course.id} value={course.id}>
          {course.name}
        </SelectItem>
      ))}
    </Select>
  );
}
