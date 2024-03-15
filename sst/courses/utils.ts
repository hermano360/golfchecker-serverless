import { CourseId, CourseName } from "./types";

const CourseNameMapping: Record<CourseName, CourseId> = {
  "Griffith Park - Harding": "griffithparkharding",
  "Griffith Park - Wilson": "griffithparkwilson",
  "Hansen Dam": "hansendam",
  "Harbor Park": "harborpark",
  Penmar: "penmar",
  "Rancho Park": "ranchopark",
  Roosevelt: "roosevelt",
  "Sepulveda - Balboa": "sepulvedabalboa",
  "Sepulveda - Encino": "sepulvedaencino",
  "Woodley Lakes": "woodleylakes",
  "Hansen Dam (Back 9)": "hansendamback9",
  "Los Feliz 3-Par": "losfeliz3par",
  "Rancho Park (Back 9)": "ranchoparkback9",
  "Rancho Park 3-Par": "ranchopark3par",
  "Sepulveda - Balboa (Back 9)": "sepulvedabalboaback9",
  "Sepulveda - Encino (Back 9)": "sepulvedaencinoback9",
  "Woodley Lakes (Back 9)": "woodleylakesback9",
};

export const completeCourseList: CourseName[] = [
  "Griffith Park - Wilson",
  "Griffith Park - Harding",
  "Hansen Dam",
  "Hansen Dam (Back 9)",
  "Harbor Park",
  "Los Feliz 3-Par",
  "Penmar",
  "Rancho Park",
  "Rancho Park (Back 9)",
  "Rancho Park 3-Par",
  "Roosevelt",
  "Sepulveda - Balboa",
  "Sepulveda - Balboa (Back 9)",
  "Sepulveda - Encino",
  "Sepulveda - Encino (Back 9)",
  "Woodley Lakes",
  "Woodley Lakes (Back 9)",
];

const supportedCourses: CourseName[] = [
  "Griffith Park - Wilson",
  "Griffith Park - Harding",
  // "Hansen Dam",
  // "Hansen Dam (Back 9)",
  // "Harbor Park",
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
  // "Woodley Lakes",
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

export const coursesWithId = supportedCourses.map((course) => ({
  id: course.toLowerCase().replace(/[\s-()]/gi, ""),
  name: course,
}));
