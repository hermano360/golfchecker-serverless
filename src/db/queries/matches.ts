import { auth } from "@/auth";
import axios from "axios";
import { Match } from "../../../sst/matches/types";

const fetchMatchesByUserId = (userId: string): Promise<Match[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/matches/${userId}`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

export async function fetchMatchesByUser(): Promise<any[]> {
  const session = await auth();

  if (!session || !session.user) {
    return [];
  }

  console.log({ userId: session.user.id });

  const matches = await fetchMatchesByUserId(session.user.id);

  return matches;
}
