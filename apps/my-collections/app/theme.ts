import useDarkMode from "use-dark-mode";
import { createTheme } from "@nextui-org/react";
import { useMemo } from "react";
import { BaseTheme } from "@nextui-org/react/types/theme";

export const lightTheme = createTheme({
  type: "light",
});

export const darkTheme = createTheme({
  type: "dark",
});

export const useTheme = () => {
  // const isDark = useDarkMode(false);
  const isDark = false;
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return theme;
};
