import axios from "axios";
import { Course } from "../../../sst/courses/types";

const fetchCoursesFromApi = async (): Promise<Course[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/courses`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

export async function fetchCourses(): Promise<Course[]> {
  const courses = await fetchCoursesFromApi();

  return courses;
}
