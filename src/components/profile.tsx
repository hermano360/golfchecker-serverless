"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user } = useUser();

  if (user) {
    return <div>From client: {JSON.stringify(user)}</div>;
  }
  return <div>From client: user is NOT signed in</div>;
}
