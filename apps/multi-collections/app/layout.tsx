"use client";

import { CssBaseline, styled } from "@nextui-org/react";
import React from "react";
import { LayoutBody } from "../components/layout-body.component";

const StyledBody = styled("body", {
  minHeight: "100vh",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <StyledBody>
        {CssBaseline.flush()}
        <LayoutBody>{children}</LayoutBody>
      </StyledBody>
    </html>
  );
}
