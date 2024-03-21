import { useCookie } from "next-cookie";
import { useEffect } from "react";
import { useUserId } from "./use-user-info";

export const useRegisterUser = () => {
  const userId = useUserId();
  const cookies = useCookie();
  const nextHasAccessed = cookies.get("next-has-accessed");

  useEffect(() => {
    if (userId && !nextHasAccessed) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}/register`);
      cookies.set("next-has-accessed", true);
    }
  }, [cookies, nextHasAccessed, userId]);
};
