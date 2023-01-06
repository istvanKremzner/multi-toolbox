"use client";

import React from "react";
import { Navbar } from "ui";
import { Providers } from "../components/provider.component";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Providers>
          <Navbar items={navItems} />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
