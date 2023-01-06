"use client";

import { NextUIProvider, styled } from "@nextui-org/react";
import { Navbar } from "ui";
import { useTheme } from "./theme";

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
  const theme = useTheme();

  return (
    <html>
      <head></head>
      <body>
        <NextUIProvider theme={theme}>
          <Navbar items={navItems} />
          <main>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
