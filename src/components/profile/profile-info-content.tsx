import { fetchProfile } from "@/db/queries/profile";
import ProfileInfoForm from "./profile-info-form";

export default async function ProfileInfoContent() {
  const profile = await fetchProfile();

  return (
    <>
      <ProfileInfoForm profile={profile} />
    </>
  );
}
