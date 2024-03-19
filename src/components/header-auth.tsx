"use client";

import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useRegisterUser } from "@/hooks/use-register-user";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function HeaderAuth() {
  useRegisterUser();
  const { user, isLoading } = useUser();

  console.log({ user });

  if (isLoading) {
    return <div>Loading</div>;
  } else if (user) {
    return (
      <Popover>
        <PopoverTrigger>
          <Avatar src={user.picture || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            {JSON.stringify(user)}
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    return (
      <NavbarItem>
        <Link href="/api/auth/login">
          <Button type="submit" color="secondary" variant="bordered">
            Log in
          </Button>
        </Link>
      </NavbarItem>
    );
  }
}
