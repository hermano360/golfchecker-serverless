"use server";

import { auth } from "@/auth";
import paths from "@/paths";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const deleteAlertSchema = z.object({
  alertId: z.string().min(1),
});

interface DeleteAlertFormState {
  errors: {
    alertId?: string[];
    _form?: string[];
  };
}

const deleteAlertById = (userId: string, alertId: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  return new Promise((resolve, reject) => {
    axios
      .delete(`${apiUrl}/alerts/${userId}/${alertId}`)
      .then(function (response) {
        resolve(response.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export async function deleteAlert(
  { alertId }: { alertId: string },
  formState: DeleteAlertFormState,
  formData: FormData
): Promise<DeleteAlertFormState> {
  const result = deleteAlertSchema.safeParse({
    alertId,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this"],
      },
    };
  }

  try {
    await deleteAlertById(session.user.id, alertId);
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

  revalidatePath(paths.home());
  redirect(paths.home());
}
