import type { Alert } from "@prisma/client";
import { db } from "@/db";
import { auth } from "@/auth";
import axios from "axios";

const fetchAlertsByUserId = (userId: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/alerts/${userId}`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};

const fetchAlertByIdApi = (userId: string, alertId: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/alerts/${userId}/${alertId}`)
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
