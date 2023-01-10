"use client";

import { CreateTheme, NextUIProvider } from "@nextui-org/react";
import { SSRProvider } from "@react-aria/ssr";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC } from "react";
import { darkTheme, lightTheme, useTheme } from "../theme";

interface IProvidersProps {
  children: React.ReactNode;
}

const ThemeProvider = NextUIProvider as FC<{
  theme?: CreateTheme;
  children: React.ReactNode;
}>;

export const Providers: FC<IProvidersProps> = ({ children }) => {
  if (!ThemeProvider) {
    return null;
  }

  return (
    <SSRProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </NextThemesProvider>
    </SSRProvider>
  );
};
