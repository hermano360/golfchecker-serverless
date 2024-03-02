import { useSession } from "next-auth/react";
import { useCookie } from "next-cookie";
import { useEffect } from "react";

export const useRegisterUser = () => {
  const session = useSession();
  const cookies = useCookie();

  const userId = session.data?.user?.id;
  const nextHasAccessed = cookies.get("next-has-accessed");

  useEffect(() => {
    if (userId && !nextHasAccessed) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}/register`);
      cookies.set("next-has-accessed", true);
    }
  }, [cookies, nextHasAccessed, userId]);
};
