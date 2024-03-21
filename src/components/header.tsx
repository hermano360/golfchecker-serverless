import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import HeaderAuth from "./header-auth";
import { Suspense } from "react";
// import SearchInput from "./search-input";

export default async function Header() {
  return (
    <Navbar className="mb-6">
      <NavbarBrand className="p-0">
        <Link href="/" className="font-bold">
          Golf Checker
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <Suspense>
          <HeaderAuth />
        </Suspense>
      </NavbarContent>
    </Navbar>
  );
}
