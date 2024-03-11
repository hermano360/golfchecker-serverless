import axios from "axios";
import { Course } from "../../../sst/courses/types";
import { API_URL } from "@/utils/constants";

const fetchCoursesFromApi = async (): Promise<Course[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/courses`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

export async function fetchCourses(): Promise<Course[]> {
  const courses = await fetchCoursesFromApi();

  return courses;
}
