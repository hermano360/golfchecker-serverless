"use client";

import { today, getLocalTimeZone, CalendarDate } from "@internationalized/date";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { Button, Input, Select, SelectItem, Slider } from "@nextui-org/react";
import { RangeCalendar } from "@adobe/react-spectrum";
import { Suspense, useState } from "react";
import { ErrorMessage } from "../common/error-message";
import { Course } from "../../../sst/courses/types";
import CourseSelector from "../common/course-selector";

interface AlertCreateFormProps {}

export default function AlertCreateForm({}: AlertCreateFormProps) {
  const [formState, action] = useFormState(actions.createAlert, { errors: {} });

  const [startDate, setStartDate] = useState(today(getLocalTimeZone()));
  const [endDate, setEndDate] = useState(
    today(getLocalTimeZone()).add({ days: 3 })
  );

  const handleCalendarChange = ({
    start,
    end,
  }: {
    start: CalendarDate;
    end: CalendarDate;
  }) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="w-60">
      <form action={action}>
        <CourseSelector errors={formState.errors.courseId} />

        <Slider
          label="Number of Players"
          name="numPlayers"
          defaultValue={1}
          minValue={1}
          maxValue={4}
        />
        <Input name="startTime" label="Start Time" type="time" />
        <Input name="endTime" label="End Time" type="time" />
        <Input name="startDate" type="hidden" value={startDate.toString()} />
        <Input name="endDate" type="hidden" value={endDate.toString()} />
        <RangeCalendar
          aria-label="Event date"
          minValue={today(getLocalTimeZone())}
          value={{
            start: startDate,
            end: endDate,
          }}
          onChange={handleCalendarChange}
        />
        <ErrorMessage error={formState.errors._form?.join(", ")} />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
