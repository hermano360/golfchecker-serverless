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

export const convertCourseToId = (
  courseName?: CourseName
): CourseId | undefined => {
  if (!courseName) {
    return;
  }

  return CourseNameMapping[courseName];
};
