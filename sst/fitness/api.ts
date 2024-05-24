import { ApiHandler } from "sst/node/api";
import { extractDailyMacros, fetchDiaryScraping } from "./utils";

export const fetchProfile = ApiHandler(async (evt) => {
  const userHandle = evt.pathParameters?.userHandle;

  if (userHandle) {
    const profileResult = await fetchDiaryScraping(userHandle);

    const goals = extractDailyMacros(profileResult);
    return { goals };
  }

  return { userHandle: "good" };
});
