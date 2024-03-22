"use server";

import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { API_URL } from "@/utils/constants";
import { getSession } from "@auth0/nextjs-auth0";

const updateProfileSchema = z.object({
  name: z
    .string()
    .min(1)
    .refine(
      (value) => /^[a-zA-Z\s]+$/.test(value),
      "Please enter a valid name"
    ),
  isSMSSelected: z.boolean(),
  phone: z
    .string()
    .refine(
      (value) => /^\(\d{3}\)-\d{3}-\d{4}$/.test(value),
      "Please enter a phone number in the correct format"
    ),
  isEmailSelected: z.boolean(),
  email: z
    .string()
    .refine(
      (value) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
      "The email must be in valid format"
    ),
});

interface UpdateProfileFormState {
  errors: {
    name?: string[];
    isSMSSelected?: string[];
    phone?: string[];
    isEmailSelected?: string[];
    email?: string[];
    _form?: string[];
  };
}

const submitUpdateProfile = async (data): Promise<boolean> => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "post",
    body: JSON.stringify(data),
  });

  const successful = await response.json();

  return successful;
};

export async function updateProfile(
  formState: UpdateProfileFormState,
  formData: FormData
): Promise<UpdateProfileFormState> {
  const result = updateProfileSchema.safeParse({
    name: formData.get("name"),
    isSMSSelected: formData.get("isSMSSelected"),
    phone: formData.get("phone"),
    isEmailSelected: formData.get("isEmailSelected"),
    email: formData.get("email"),
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

  const { data } = result;

  try {
    const updateProfileData = {
      name: data.name,
      isSMSSelected: data.isSMSSelected,
      phone: data.phone,
      isEmailSelected: data.isEmailSelected,
      email: data.email,
      userId: session.user.sid,
    };

    await submitUpdateProfile(updateProfileData);
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
