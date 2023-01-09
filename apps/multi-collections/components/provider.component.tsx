"use client";

import { CreateTheme, CssBaseline, NextUIProvider } from "@nextui-org/react";
import { FC } from "react";
import { useTheme } from "../theme";
import { SSRProvider } from "@react-aria/ssr";

interface IProvidersProps {
  children: React.ReactNode;
}

const ThemeProvider = NextUIProvider as FC<{
  theme: CreateTheme;
  children: React.ReactNode;
}>;

export const Providers: FC<IProvidersProps> = ({ children }) => {
  const theme = useTheme();

  if (!ThemeProvider) {
    return null;
  }

  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SSRProvider>
  );
};
