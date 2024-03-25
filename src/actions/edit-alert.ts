"use server";

import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Alert } from "../../sst/alerts/types";
import { API_URL } from "@/utils/constants";

import { getSession } from "@auth0/nextjs-auth0";

const updateAlertSchema = z.object({
  alertId: z.string(),
  allowNotification: z.boolean(),
});

interface CreateAlertFormState {
  errors: {
    alertId?: string[];
    allowNotification?: string[];
    _form?: string[];
  };
}

const submitUpdateAlert = async (data): Promise<Alert> => {
  const response = await fetch(
    `${API_URL}/alerts/${data.userId}/${data.alertId}`,
    {
      method: "put",
      body: JSON.stringify(data),
    }
  );

  const alert = await response.json();

  return alert;
};

export async function editAlert(
  {
    alertId,
    allowNotification,
  }: {
    alertId: string;
    allowNotification: boolean;
  },
  formState: CreateAlertFormState,
  formData: FormData
): Promise<CreateAlertFormState> {
  const result = updateAlertSchema.safeParse({
    alertId,
    allowNotification,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await getSession();

  session?.user;
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this"],
      },
    };
  }

  try {
    const updateAlertData = {
      alertId,
      allowNotification,
      userId: session.user.sid,
    };

    await submitUpdateAlert(updateAlertData);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath(paths.alerts());
  redirect(paths.alerts());
}
