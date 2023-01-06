"use client";

import { CreateTheme, NextUIProvider } from "@nextui-org/react";
import React, { FC } from "react";
import { Navbar } from "ui";
import { useTheme } from "../theme/theme";

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

const Provider = NextUIProvider as FC<{
  theme: CreateTheme;
  children: React.ReactNode;
}>;

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
        <Provider theme={theme}>
          <Navbar items={navItems} />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
