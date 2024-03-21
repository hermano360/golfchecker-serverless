"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileButtons = ({ url }: { url: string }) => {
  // const isProfile = url.includes("/profile");
  return (
    <>
      {/* <Button color={isProfile ? "primary" : "secondary"}>
        <Link href="/profile">Profile</Link>
      </Button> */}
    </>
  );
};

const AlertButtons = ({ url }: { url: string }) => {
  const isNewAlerts = url.includes("/alerts/new");
  const isAlerts = !isNewAlerts;
  return (
    <>
      <Button color={isAlerts ? "primary" : "secondary"}>
        <Link href="/alerts">Current Alerts</Link>
      </Button>
      <Button color={isNewAlerts ? "primary" : "secondary"}>
        <Link href="/alerts/new">New Alert</Link>
      </Button>
    </>
  );
};

const MatchButtons = ({ url }: { url: string }) => {
  // const isMatches = url.includes("/matches");
  return (
    <>
      {/* <Button color={isMatches ? "primary" : "secondary"}>
        <Link href="/matches">Matches</Link>
      </Button> */}
    </>
  );
};

export default function NavigationHeaderButtons() {
  const fullUrl = usePathname();

  const isProfile = fullUrl.includes("/profile");
  const isAlerts = fullUrl.includes("/alerts");
  const isMatches = fullUrl.includes("/matches");

  return isProfile || isAlerts || isMatches ? (
    <ButtonGroup className="mb-3">
      {isProfile && <ProfileButtons url={fullUrl} />}
      {isAlerts && <AlertButtons url={fullUrl} />}
      {isMatches && <MatchButtons url={fullUrl} />}
    </ButtonGroup>
  ) : null;
}
