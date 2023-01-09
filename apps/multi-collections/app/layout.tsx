"use client";

import { CssBaseline } from "@nextui-org/react";
import React from "react";
import { LayoutBody } from "../components/layout-body.component";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        {CssBaseline.flush()}
        <LayoutBody>{children}</LayoutBody>
      </body>
    </html>
  );
}
