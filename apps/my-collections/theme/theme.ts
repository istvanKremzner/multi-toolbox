import { createTheme } from "@nextui-org/react";
import { useMemo } from "react";
import useDarkMode from "use-dark-mode";

export const lightTheme = createTheme({
  type: "light",
});

export const darkTheme = createTheme({
  type: "dark",
});

export const useTheme = () => {
  const isDark = useDarkMode(false);
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return theme;
};
