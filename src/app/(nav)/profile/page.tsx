import { Suspense } from "react";
import ProfileInfoContent from "@/components/profile/profile-info-content";

export default async function Profile() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Suspense>
        <ProfileInfoContent />
      </Suspense>
    </div>
  );
}
