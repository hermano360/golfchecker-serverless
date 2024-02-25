"use client";

import { today, getLocalTimeZone } from "@internationalized/date";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { Button } from "@nextui-org/react";

import { ErrorMessage } from "../common/error-message";

export default function AlertDeleteForm({ alertId }: { alertId: string }) {
  const [formState, action] = useFormState(
    actions.deleteAlert.bind(null, { alertId }),
    {
      errors: {},
    }
  );

  const alertError = formState.errors.alertId
    ? formState.errors.alertId.join(", ")
    : undefined;

  const formError = formState.errors._form
    ? formState.errors._form.join(", ")
    : undefined;

  return (
    <form action={action}>
      {alertError || formError ? (
        <ErrorMessage error={alertError || formError} />
      ) : null}
      <Button type="submit" color="danger">
        Delete
      </Button>
    </form>
  );
}
