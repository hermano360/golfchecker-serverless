import { Alert } from "../../../sst/alerts/types";
import { API_URL } from "@/utils/constants";

import { getSession } from "@auth0/nextjs-auth0";

const fetchAlertByIdApi = async (
  userId: string,
  alertId: string
): Promise<Alert | undefined> => {
  const response = await fetch(`${API_URL}/alerts/${userId}/${alertId}`, {
    cache: "force-cache",
  });

  return response.json();
};

export async function fetchAlertsByUser(): Promise<any[]> {
  const session = await getSession();

  const userId = session?.user.sub;
  if (!session || !session.user || !session.user.sub) {
    return [];
  }

  const response = await fetch(`${API_URL}/alerts/${userId}`, {
    next: {
      revalidate: 30,
    },
  });

  return response.json();
}

export async function fetchAlertsById(
  alertId: string,
  userId?: string
): Promise<any> {
  if (!userId) {
    return {};
  }

  return fetchAlertByIdApi(userId, alertId);
}
