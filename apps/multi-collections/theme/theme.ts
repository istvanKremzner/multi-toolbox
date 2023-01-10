import { createTheme } from "@nextui-org/react";

export const lightTheme = createTheme({
  type: "light",
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#2e2e2e",
    },
  },
});
