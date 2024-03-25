"use server";

import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Alert, AlertRequest } from "../../sst/alerts/types";
import { DateDash } from "../../sst/time/types";
import { API_URL } from "@/utils/constants";
import { getClockTime } from "@/utils/dates";
import { CourseId } from "../../sst/courses/types";
import { getSession } from "@auth0/nextjs-auth0";

const createAlertSchema = z.object({
  courseIds: z
    .string()
    .array()
    .min(1)
    .refine((value) => value, "Please select a valid golf course"),
  timeRange: z.number().array(),
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
    courseIds?: string[];
    timeRange?: string[];
    startDate?: string[];
    endDate?: string[];
    numPlayers?: string[];
    _form?: string[];
  };
}

const submitCreateAlert = async (data: AlertRequest): Promise<Alert> => {
  const response = await fetch(`${API_URL}/alerts`, {
    method: "post",
    body: JSON.stringify(data),
  });

  const alert = await response.json();

  return alert;
};

export async function createAlerts(
  {
    timeRange,
    startDate,
    endDate,
    courseIds,
  }: {
    courseIds: CourseId[];
    timeRange: number[];
    startDate: DateDash;
    endDate: DateDash;
  },
  formState: CreateAlertFormState,
  formData: FormData
): Promise<CreateAlertFormState> {
  const result = createAlertSchema.safeParse({
    numPlayers: formData.get("numPlayers"),
    courseIds,
    timeRange,
    startDate,
    endDate,
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

  const [startTime, endTime] = data.timeRange;

  if (startTime > endTime) {
    return {
      errors: { timeRange: ["The range of time is not valid"] },
    };
  }

  const courseIdsData: CourseId[] = data.courseIds as CourseId[];
  try {
    for (let courseId of courseIdsData) {
      const createAlertData = {
        courseId: courseId,
        startTime: getClockTime(startTime),
        endTime: getClockTime(endTime),
        startDate: data.startDate as DateDash,
        endDate: data.endDate as DateDash,
        numPlayers: parseInt(data.numPlayers),
        userId: session.user.sid,
      };

      await submitCreateAlert({
        ...createAlertData,
      });
    }
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
