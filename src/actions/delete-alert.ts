"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";
import { Alert } from "@prisma/client";
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

  try {
    await db.alert.delete({
      where: {
        id: result.data.alertId,
      },
    });
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
