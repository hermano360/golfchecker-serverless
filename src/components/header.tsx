import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import HeaderAuth from "./header-auth";
// import SearchInput from "./search-input";

export default async function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand className="p-0">
        <Link href="/" className="font-bold">
          Golf Checker
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
