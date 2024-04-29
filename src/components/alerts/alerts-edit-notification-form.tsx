"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { Button } from "@nextui-org/react";

export default function AlertEditNotificationForm({
  alertId,
  allowNotification,
  handleSubmit,
}: {
  alertId: string;
  allowNotification: boolean;
  handleSubmit?: () => void;
}) {
  const [formState, action] = useFormState(
    actions.editAlert.bind(null, {
      alertId,
      allowNotification: !allowNotification,
    }),
    {
      errors: {},
    }
  );

  return (
    <form action={action} onSubmit={handleSubmit}>
      {allowNotification ? (
        <Button type="submit" color="success">
          Enabled
        </Button>
      ) : (
        <Button type="submit" color="warning">
          Disabled
        </Button>
      )}
    </form>
  );
}
