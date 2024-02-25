import type { Alert } from "@prisma/client";
import { db } from "@/db";
import { auth } from "@/auth";

export async function fetchAlertsByUser(): Promise<Alert[]> {
  const session = await auth();

  if (!session || !session.user) {
    return [];
  }

  return db.alert.findMany({
    where: {
      userId: session.user.id,
    },
  });
}

export function fetchAlertsById(alertId: string): Promise<Alert> {
  return db.alert.findUniqueOrThrow({
    where: {
      id: alertId,
    },
  });
}
