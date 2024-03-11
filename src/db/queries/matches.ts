import { auth } from "@/auth";
import axios from "axios";
import { Match } from "../../../sst/matches/types";
import { API_URL } from "@/utils/constants";

const fetchMatchesByUserId = (userId: string): Promise<Match[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/matches/${userId}`)
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
