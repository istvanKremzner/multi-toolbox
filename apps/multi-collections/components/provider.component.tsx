"use client";

import { CreateTheme, NextUIProvider } from "@nextui-org/react";
import { FC } from "react";
import { useTheme } from "../theme";

interface IProvidersProps {
  children: React.ReactNode;
}

const ThemeProvider = NextUIProvider as FC<{
  theme: CreateTheme;
  children: React.ReactNode;
}>;

export const Providers: FC<IProvidersProps> = ({ children }) => {
  const theme = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
