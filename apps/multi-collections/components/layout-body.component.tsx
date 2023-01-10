"use client";

import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { Navbar } from "ui";
import { Providers } from "./provider.component";

interface IRootLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Collections",
    href: "/collection",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const LayoutBody: FC<IRootLayoutProps> = ({ children }) => (
  <Providers>
    <Navbar items={navItems} />

    <main>{children}</main>
  </Providers>
);
