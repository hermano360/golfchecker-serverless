import axios from "axios";
import { Course } from "../../../sst/courses/types";
import { API_URL } from "@/utils/constants";

const fetchCoursesFromApi = async (): Promise<Course[]> => {
  const response = await fetch(`${API_URL}/courses`, {
    cache: "force-cache",
  });
  const courses = await response.json();
  return courses;
};

export async function fetchCourses(): Promise<Course[]> {
  const courses = await fetchCoursesFromApi();

  return courses;
}
