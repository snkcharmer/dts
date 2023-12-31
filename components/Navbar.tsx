import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

export const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/nmp.svg" width={50} height={20} alt="Flexible" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((navlink) => (
            <Link href={navlink.href} key={navlink.key}>
              {navlink.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders></AuthProviders>
        )}
      </div>
    </nav>
  );
};
