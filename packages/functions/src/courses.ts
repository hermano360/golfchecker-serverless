import { ApiHandler } from "sst/node/api";

export type CourseId =
  | "griffithparkharding"
  | "griffithparkwilson"
  | "hansendam"
  | "harborpark"
  | "penmar"
  | "ranchopark"
  | "roosevelt"
  | "sepulvedabalboa"
  | "sepulvedaencino"
  | "woodleylakes";

export type CourseName =
  | "Woodley Lakes"
  | "Griffith Park - Harding"
  | "Griffith Park - Wilson"
  | "Hansen Dam"
  | "Harbor Park"
  | "Penmar"
  | "Rancho Park"
  | "Roosevelt"
  | "Sepulveda - Balboa"
  | "Sepulveda - Encino";

const courses: CourseName[] = [
  "Griffith Park - Harding",
  "Griffith Park - Wilson",
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

export const coursesWithId = courses.map((course) => ({
  id: course.toLowerCase().replace(/[\s-()]/gi, ""),
  name: course,
}));

export const fetchCourses = ApiHandler(async (evt) => {
  return {
    statusCode: 200,
    body: JSON.stringify(coursesWithId),
  };
});

export const setCourses = ApiHandler(async (evt) => {
  const { body } = evt;
  if (!body) {
    return {
      statusCode: 400,
    };
  }

  return {
    statusCode: 200,
    body: evt.requestContext.time,
  };
});
