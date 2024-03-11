import { auth } from "@/auth";
import axios from "axios";
import { Alert } from "../../../sst/alerts/types";
import { API_URL } from "@/utils/constants";

const fetchAlertsByUserId = (userId: string): Promise<Alert[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/alerts/${userId}`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

const fetchAlertByIdApi = (
  userId: string,
  alertId: string
): Promise<Alert | undefined> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/alerts/${userId}/${alertId}`)
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((err) => reject(err));
  });
};

export async function fetchAlertsByUser(): Promise<any[]> {
  const session = await auth();

  if (!session || !session.user) {
    return [];
  }

  const alerts = await fetchAlertsByUserId(session.user.id);

  return alerts;
}

export async function fetchAlertsById(alertId: string): Promise<any> {
  const session = await auth();

  if (!session || !session.user) {
    return {};
  }

  return fetchAlertByIdApi(session.user.id, alertId);
}
