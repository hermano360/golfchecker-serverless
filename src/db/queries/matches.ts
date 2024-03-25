"use server";

import { Match } from "../../../sst/matches/types";
import { API_URL } from "@/utils/constants";
import { getSession } from "@auth0/nextjs-auth0";

const fetchMatchesByUserId = async (
  userId: string
): Promise<Match[] | undefined> => {
  const response = await fetch(`${API_URL}/matches/${userId}`, {
    cache: "no-cache",
  });

  return await response.json();
};

export async function fetchMatchesByUser(): Promise<any[]> {
  const session = await getSession();

  console.log({ session });

  if (!session || !session.user || !session.user.sid) {
    return [];
  }

  console.log({ id: session.user.sid });

  const matches = await fetchMatchesByUserId(session.user.sid);

  if (!matches) {
    return [];
  }
  return matches;
}
