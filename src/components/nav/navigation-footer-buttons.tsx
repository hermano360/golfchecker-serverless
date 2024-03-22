"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationFooterButtons() {
  const fullUrl = usePathname();

  const isProfile = fullUrl.includes("/profile");
  const isAlerts = fullUrl.includes("/alerts");
  const isMatches = fullUrl.includes("/matches");

  return isProfile || isAlerts || isMatches ? (
    <ButtonGroup className="mt-3">
      <Button color={isAlerts ? "primary" : "secondary"}>
        <Link href="/alerts">Alerts</Link>
      </Button>
      <Button color={isMatches ? "primary" : "secondary"}>
        <Link href="/matches">Matches</Link>
      </Button>
      <Button color={isProfile ? "primary" : "secondary"}>
        <Link href="/profile">Profile</Link>
      </Button>
    </ButtonGroup>
  ) : null;
}
