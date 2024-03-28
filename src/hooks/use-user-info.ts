import { useUser } from "@auth0/nextjs-auth0/client";

export const useUserId = (): string | undefined => {
  const { user } = useUser();
  let userId;

  if (user?.sub) {
    userId = user?.sub as string;
  }

  return userId;
};
