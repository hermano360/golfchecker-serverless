import { API_URL } from "@/utils/constants";

import { getSession } from "@auth0/nextjs-auth0";
import { Profile } from "../../../sst/profile/types";

export async function fetchProfile(): Promise<Profile | undefined> {
  const session = await getSession();

  const userId = session?.user.sub;
  if (!session || !session.user || !session.user.sub) {
    return;
  }

  const response = await fetch(`${API_URL}/profile/${userId}`, {
    next: {
      revalidate: 0,
    },
  });

  return response.json();
}
