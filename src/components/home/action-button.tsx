"use client";

import { useRegisterUser } from "@/hooks/use-register-user";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Button, Spinner } from "@nextui-org/react";
import Link from "next/link";

const SearchButton = ({
  text = "Search",
  isLoading = false,
  disabled = false,
}) => (
  <Button color="primary" fullWidth disabled={disabled}>
    {isLoading ? <Spinner /> : text}
  </Button>
);

export default function HomeActionButton() {
  useRegisterUser();
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <Link href="/">
        <SearchButton isLoading disabled />
      </Link>
    );
  } else if (user) {
    return (
      <Link href="/profile">
        <SearchButton />
      </Link>
    );
  } else {
    return (
      <Link href="/api/auth/login">
        <SearchButton text="Login" />
      </Link>
    );
  }
}
