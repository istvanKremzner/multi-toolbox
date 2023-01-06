import { createTheme } from "@nextui-org/react";
import { useMemo } from "react";

export const lightTheme = createTheme({
  type: "light",
});

export const darkTheme = createTheme({
  type: "dark",
});

export const useTheme = () => {
  const isDark = false;
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return theme;
};
