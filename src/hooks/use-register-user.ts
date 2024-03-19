import { useUser } from "@auth0/nextjs-auth0/client";

import { useCookie } from "next-cookie";
import { useEffect } from "react";

export const useRegisterUser = () => {
  const { user } = useUser();
  const cookies = useCookie();
  const userId = user?.sid;
  const nextHasAccessed = cookies.get("next-has-accessed");
  console.log({ userId, nextHasAccessed });

  useEffect(() => {
    if (userId && !nextHasAccessed) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}/register`);
      cookies.set("next-has-accessed", true);
    }
  }, [cookies, nextHasAccessed, userId]);
};
