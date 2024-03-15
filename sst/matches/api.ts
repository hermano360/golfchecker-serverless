import { ApiHandler } from "sst/node/api";
import { fetchMatchesByUser, generateMatches } from "./utils";
import { getLatestMatchedAt } from "../matchedAt/utils";

export async function initiateMatchesFetching() {
  try {
    await generateMatches();
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "Matching Sequence Initialized!" }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }
}

export const fetchMatchesByUserHandler = ApiHandler(async (evt) => {
  const userId = evt.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Error with your request" }),
    };
  }

  try {
    const matchedAt = await getLatestMatchedAt(userId);
    if (!matchedAt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Error with your request" }),
      };
    }

    const matches = await fetchMatchesByUser({
      userId,
      matchedAt,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(matches),
    };
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
});
