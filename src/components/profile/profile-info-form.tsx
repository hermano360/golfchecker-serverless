"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { Button, Input, Checkbox, Spinner } from "@nextui-org/react";
import { ErrorMessage } from "../common/error-message";
import { useEffect, useState } from "react";
import { Profile } from "../../../sst/profile/types";

interface ProfileInfoFormProps {
  profile?: Profile;
}

export default function ProfileInfoForm({ profile }: ProfileInfoFormProps) {
  const [smsAllowed, setSMSAllowed] = useState(false);
  const [emailAllowed, setEmailAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, action] = useFormState(
    actions.updateProfile.bind(null, {
      smsAllowed,
      emailAllowed,
    }),
    {
      errors: {},
    }
  );

  useEffect(() => {
    if (profile) {
      setEmailAllowed(profile?.emailAllowed || false);
      setSMSAllowed(profile?.smsAllowed || false);
      setIsLoading(false);
    }
  }, [profile]);

  useEffect(() => {
    if (formState?.errors) {
      setIsLoading(false);
    }
  }, [formState?.errors]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <form
          action={action}
          className="w-3/4 flex justify-center flex-col max-w-lg border border-4 rounded p-5"
          onSubmit={() => setIsLoading(true)}
        >
          <div className="text-xl mb-3">Profile</div>
          <Input
            name="userName"
            isInvalid={!!formState?.errors.userName}
            errorMessage={formState?.errors.userName?.join(", ")}
            placeholder="Name"
            variant="bordered"
            className="mb-3"
            defaultValue={profile?.userName || ""}
          />
          <Checkbox
            name="smsAllowed"
            className="mb-3"
            isSelected={smsAllowed}
            onValueChange={setSMSAllowed}
          >
            Allow SMS
          </Checkbox>
          {smsAllowed && (
            <Input
              name="phone"
              isInvalid={!!formState?.errors.phone}
              errorMessage={formState?.errors.phone?.join(", ")}
              placeholder="Phone"
              variant="bordered"
              type="phone"
              className="mb-3"
              defaultValue={profile?.phone || ""}
            />
          )}
          <Checkbox
            name="emailAllowed"
            className="mb-3"
            isSelected={emailAllowed}
            onValueChange={setEmailAllowed}
          >
            Allow Email
          </Checkbox>
          {emailAllowed && (
            <Input
              name="email"
              isInvalid={!!formState?.errors.email}
              errorMessage={formState?.errors.email?.join(", ")}
              placeholder="Email"
              variant="bordered"
              type="email"
              className="mb-3"
              defaultValue={profile?.email || ""}
            />
          )}

          <ErrorMessage error={formState?.errors._form?.join(", ")} />

          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      )}
    </>
  );
}
