import { Suspense } from "react";
import ProfileInfoForm from "@/components/profile/profile-info-form";

export default async function Profile() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Suspense>
        <ProfileInfoForm />
      </Suspense>
    </div>
  );
}
