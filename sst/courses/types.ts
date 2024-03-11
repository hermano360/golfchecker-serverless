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

export type Course = {
  id: CourseId;
  name: CourseName;
};
