"use client";

import { today, getLocalTimeZone, CalendarDate } from "@internationalized/date";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { Button, Radio, RadioGroup, Slider } from "@nextui-org/react";
import { RangeCalendar } from "@adobe/react-spectrum";
import { ErrorMessage } from "../common/error-message";
import { getClockTime } from "@/utils/dates";
import { DateDash } from "../../../sst/time/types";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useCourses } from "@/hooks/use-courses";
import { CourseId } from "../../../sst/courses/types";

interface AlertCreateFormProps {}

export default function AlertCreateForm({}: AlertCreateFormProps) {
  const [startTime, setStartTime] = useState<number>(40);
  const [endTime, setEndTime] = useState<number>(56);
  const [startDate, setStartDate] = useState(today(getLocalTimeZone()));
  const [endDate, setEndDate] = useState(
    today(getLocalTimeZone()).add({ days: 3 })
  );
  const [courseIds, setCourseIds] = useState<CourseId[]>([]);
  const courses = useCourses();

  const [formState, action] = useFormState(
    actions.createAlerts.bind(null, {
      courseIds,
      timeRange: [startTime, endTime],
      startDate: startDate.toString() as DateDash,
      endDate: endDate.toString() as DateDash,
    }),
    { errors: {} }
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
    <form action={action} className="flex flex-col justify-center items-center">
      <Select
        label="Select Course"
        name="courseIds"
        selectionMode="multiple"
        className="mb-3"
        isInvalid={!!formState.errors.courseIds}
        errorMessage={formState.errors.courseIds?.join(", ")}
        renderValue={(selected) => {
          if (selected.length === 1) {
            return selected[0].textValue;
          } else {
            return `${selected.length} Courses Selected`;
          }
        }}
        onChange={(val) => {
          if (val) {
            const coursesSelected = val.target.value as string;
            const courses = coursesSelected.split(",") as CourseId[];
            setCourseIds(courses);
          } else {
            setCourseIds([]);
          }
        }}
      >
        {courses.map((course) => (
          <SelectItem key={course.id} value={course.id}>
            {course.name}
          </SelectItem>
        ))}
      </Select>
      <Slider
        label="Time Range"
        name="timeRange"
        defaultValue={[startTime, endTime]}
        getValue={(value) => {
          if (Array.isArray(value)) {
            const [startTime, endTime] = value;
            return `${getClockTime(startTime)} - ${getClockTime(endTime)}`;
          }
          return value.toString();
        }}
        onChange={(value) => {
          if (Array.isArray(value)) {
            const [start, end] = value;
            setStartTime(start);
            setEndTime(end);
          }
          return value.toString();
        }}
        minValue={20}
        maxValue={76}
        className="mb-6"
      />
      <ErrorMessage error={formState.errors.timeRange?.join(", ")} />
      <RadioGroup
        label="Number of Players"
        name="numPlayers"
        defaultValue="4"
        orientation="horizontal"
        className="mb-6"
      >
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
        <Radio value="4">4</Radio>
      </RadioGroup>
      <ErrorMessage error={formState.errors.numPlayers?.join(", ")} />
      <RangeCalendar
        aria-label="Event date"
        minValue={today(getLocalTimeZone())}
        value={{
          start: startDate,
          end: endDate,
        }}
        onChange={handleCalendarChange}
      />
      <ErrorMessage error={formState.errors.startDate?.join(", ")} />
      <ErrorMessage error={formState.errors.endDate?.join(", ")} />
      <ErrorMessage error={formState.errors._form?.join(", ")} />
      <Button type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
}
