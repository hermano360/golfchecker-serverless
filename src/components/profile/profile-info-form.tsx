"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { Button, Input, Checkbox } from "@nextui-org/react";
import { ErrorMessage } from "../common/error-message";
import { useState } from "react";

interface ProfileInfoFormProps {}

export default function ProfileInfoForm({}: ProfileInfoFormProps) {
  const [isSMSSelected, setIsSMSSelected] = useState(true);
  const [isEmailSelected, setIsEmailSelected] = useState(false);
  const [formState, action] = useFormState(actions.updateProfile, {
    errors: {},
  });

  return (
    <form
      action={action}
      className="w-3/4 flex justify-center flex-col max-w-lg border border-4 rounded p-5"
    >
      <div className="text-xl mb-3">Profile</div>
      <Input
        name="name"
        isInvalid={!!formState.errors.name}
        errorMessage={formState.errors.name?.join(", ")}
        placeholder="Name"
        variant="bordered"
        className="mb-3"
      />
      <Checkbox
        name="smsAllowed"
        className="mb-3"
        isSelected={isSMSSelected}
        onValueChange={setIsSMSSelected}
      >
        Allow SMS
      </Checkbox>
      {isSMSSelected && (
        <Input
          name="phone"
          isInvalid={!!formState.errors.phone}
          errorMessage={formState.errors.phone?.join(", ")}
          placeholder="Phone"
          variant="bordered"
          type="phone"
          className="mb-3"
        />
      )}
      <Checkbox
        name="emailAllowed"
        className="mb-3"
        isSelected={isEmailSelected}
        onValueChange={setIsEmailSelected}
      >
        Allow Email
      </Checkbox>
      {isEmailSelected && (
        <Input
          name="email"
          isInvalid={!!formState.errors.email}
          errorMessage={formState.errors.email?.join(", ")}
          placeholder="Email"
          variant="bordered"
          type="email"
          className="mb-3"
        />
      )}

      <ErrorMessage error={formState.errors._form?.join(", ")} />

      <Button type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
}
