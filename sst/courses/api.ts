import { ApiHandler } from "sst/node/api";
import { coursesWithId } from "./utils";

export const fetchCourses = ApiHandler(async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(coursesWithId),
  };
});
