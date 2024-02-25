type Course = {
  id: string;
  name: string;
};

export function fetchCourses(): Course[] {
  const courses = [
    {
      id: "abc",
      name: "Roosevelt",
    },
    {
      id: "def",
      name: "Wilson",
    },
  ];
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
