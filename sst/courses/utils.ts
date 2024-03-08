import { CourseId, CourseName } from "./types";

const CourseNameMapping: Record<CourseName, CourseId> = {
  "Woodley Lakes": "woodleylakes",
  "Griffith Park - Harding": "griffithparkharding",
  "Griffith Park - Wilson": "griffithparkwilson",
  "Hansen Dam": "hansendam",
  "Harbor Park": "harborpark",
  Penmar: "penmar",
  "Rancho Park": "ranchopark",
  Roosevelt: "roosevelt",
  "Sepulveda - Balboa": "sepulvedabalboa",
  "Sepulveda - Encino": "sepulvedaencino",
};

const courses: CourseName[] = [
  "Griffith Park - Wilson",
  "Griffith Park - Harding",
  "Hansen Dam",
  // "Hansen Dam (Back 9)",
  "Harbor Park",
  // "Los Feliz 3-Par",
  "Penmar",
  "Rancho Park",
  // "Rancho Park (Back 9)",
  // "Rancho Park 3-Par",
  "Roosevelt",
  "Sepulveda - Balboa",
  // "Sepulveda - Balboa (Back 9)",
  "Sepulveda - Encino",
  // "Sepulveda - Encino (Back 9)",
  "Woodley Lakes",
  // "Woodley Lakes (Back 9)",
];

export const convertCourseToId = (
  courseName?: CourseName
): CourseId | undefined => {
  if (!courseName) {
    return;
  }

  return CourseNameMapping[courseName];
};

export const coursesWithId = courses.map((course) => ({
  id: course.toLowerCase().replace(/[\s-()]/gi, ""),
  name: course,
}));
