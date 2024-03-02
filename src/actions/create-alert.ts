"use server";

import { auth } from "@/auth";
import paths from "@/paths";
import { Alert } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import axios from "axios";

const createAlertSchema = z.object({
  courseId: z.string().min(1),
  startTime: z
    .string()
    .refine(
      (value) => /^\d{2}:\d{2}$/.test(value),
      "The start time must be in valid format"
    ),
  endTime: z
    .string()
    .refine(
      (value) => /^\d{2}:\d{2}$/.test(value),
      "The end time must be in valid format"
    ),
  startDate: z
    .string()
    .refine(
      (value) => /^\d{4}-\d{2}-\d{2}$/.test(value),
      "The start date must be in valid format"
    ),
  endDate: z
    .string()
    .refine(
      (value) => /^\d{4}-\d{2}-\d{2}$/.test(value),
      "The end date must be in valid format"
    ),
  numPlayers: z
    .string()
    .refine(
      (value) => /^[1-4]$/.test(value),
      "There is an invalid number of players"
    ),
});

interface CreateAlertFormState {
  errors: {
    courseId?: string[];
    startTime?: string[];
    endTime?: string[];
    startDate?: string[];
    endDate?: string[];
    numPlayers?: string[];
    _form?: string[];
  };
}

const parseTime = (time: string) => {
  const [hours, minutes] = time.split(":");
  return parseInt(hours) * 60 + parseInt(minutes);
};

const formatTimeToCardinality = (time: string) => {
  const [hours, minutes] = time.split(":");

  const parsedHours = parseInt(hours);
  const isMorning = parsedHours < 12;

  return `${
    parsedHours === 0 ? "12" : isMorning ? parsedHours : parsedHours - 12
  }:${minutes} ${isMorning ? "AM" : "PM"}`;
};

const submitCreateAlert = (data) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}/alerts`, data)
      .then(function (response) {
        resolve(response.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export async function createAlert(
  formState: CreateAlertFormState,
  formData: FormData
): Promise<CreateAlertFormState> {
  const result = createAlertSchema.safeParse({
    courseId: formData.get("courseId"),
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    numPlayers: formData.get("numPlayers"),
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

  const { data } = result;

  const startTime = parseTime(data.startTime);
  const endTime = parseTime(data.endTime);

  const isStartTimeValid = startTime >= 0 && startTime <= 2880 + 59;
  const isEndTimeValid =
    endTime >= 0 && endTime <= 2880 + 59 && endTime > startTime;

  if (!isStartTimeValid || !isEndTimeValid) {
    return {
      errors: {
        ...(isStartTimeValid ? {} : { startTime: ["Start time is not valid"] }),
        ...(isEndTimeValid ? {} : { endTime: ["End time is not valid"] }),
      },
    };
  }

  let alert: Alert;
  const createAlertData = {
    courseId: data.courseId,
    startTime: parseTime(data.startTime),
    endTime: parseTime(data.endTime),
    startDate: data.startDate,
    endDate: data.endDate,
    numPlayers: parseInt(data.numPlayers),
    userId: session.user.id,
  };

  try {
    const result = await submitCreateAlert({
      ...createAlertData,
      startTime: formatTimeToCardinality(data.startTime),
      endTime: formatTimeToCardinality(data.endTime),
    });

    console.log(result);
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
  redirect(paths.alertShow(alert.id));
}
