"use client";

import { createTheme, Navbar, styled, ThemeProvider } from "ui";

const navItem = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Collections",
    url: "/collection",
  },
  {
    title: "About",
    url: "/about",
  },
];

const theme = createTheme();

const StyledBody = styled("body")({
  backgroundColor: theme.palette.background.default,
  padding: 0,

  [theme.breakpoints.up("md")]: {
    margin: "5vh 0 0",
  },
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
        <ThemeProvider theme={theme}>
          <Navbar items={navItem} />
          <main>{children}</main>
        </ThemeProvider>
      </StyledBody>
    </html>
  );
}
