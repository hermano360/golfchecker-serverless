import axios from "axios";

type Course = {
  id: string;
  name: string;
};

const fetchCoursesFromApi = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/courses`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

export async function fetchCourses(): Course[] {
  const courses = await fetchCoursesFromApi();

  return courses;
}

export function fetchCourseById(courseId: string): Course | undefined {
  const courses = {
    abc: {
      id: "abc",
      name: "Roosevelt",
    },
    def: {
      id: "def",
      name: "Wilson",
    },
  };

  return courses[courseId];
}
