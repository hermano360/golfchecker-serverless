"use server";

import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { API_URL } from "@/utils/constants";
import { getSession } from "@auth0/nextjs-auth0";
import { Profile } from "../../sst/profile/types";

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

const updateProfileSchema = z.object({
  userName: z
    .string()
    .min(1)
    .refine(
      (value) => /^[a-zA-Z\s]+$/.test(value),
      "Please enter a valid name"
    ),
  smsAllowed: z.boolean(),
  phone: z.string(),
  emailAllowed: z.boolean(),
  email: z.string(),
});

interface UpdateProfileFormState {
  errors: {
    userName?: string[];
    smsAllowed?: string[];
    phone?: string[];
    emailAllowed?: string[];
    email?: string[];
    _form?: string[];
  };
}

const submitUpdateProfile = async (data: Profile): Promise<boolean> => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "post",
    body: JSON.stringify(data),
  });

  const successful = await response.json();
  console.log({ successful });
  return successful;
};

export async function updateProfile(
  {
    smsAllowed,
    emailAllowed,
  }: {
    smsAllowed: boolean;
    emailAllowed: boolean;
  },
  formState: UpdateProfileFormState,
  formData: FormData
): Promise<UpdateProfileFormState> {
  console.log({
    smsAllowed: formData.get("smsAllowed"),
    emailAllowed: formData.get("emailAllowed"),
  });
  const result = updateProfileSchema.safeParse({
    userName: formData.get("userName"),
    smsAllowed,
    phone: formData.get("phone") || "",
    emailAllowed,
    email: formData.get("email") || "",
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { phone, email } = result.data;

  if (smsAllowed || emailAllowed) {
    const errors = {
      ...(smsAllowed && !phoneRegex.test(phone)
        ? { phone: ["Please enter a phone number in a valid format"] }
        : {}),
      ...(emailAllowed && !emailRegex.test(email)
        ? { email: ["Please enter an email in a valid format"] }
        : {}),
    };

    if (errors.phone || errors.email) {
      return {
        errors,
      };
    }
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
      userName: data.userName,
      smsAllowed: data.smsAllowed,
      phone: data.phone,
      emailAllowed: data.emailAllowed,
      email: data.email,
      userId: session.user.sub,
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

  revalidatePath(paths.profile());
  redirect(paths.profile());
}
