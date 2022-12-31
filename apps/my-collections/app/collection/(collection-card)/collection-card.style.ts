import { Card, styled, lighten, darken } from "ui";

export const StyledCard = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: 16,
  minWidth: "20%",
  cursor: "pointer",

  ".MuiCardHeader-root": {
    padding: 0,
    color: theme.palette.primary.contrastText,

    ".MuiTypography-root": {
      padding: theme.spacing(1, 2),
      backgroundColor: theme.palette.primary.light,
    },
  },

  transition: "all .25s",

  ":hover": {
    transform: "scale(1.08)",
    borderColor: theme.palette.secondary.dark,

    ".MuiCardHeader-root": {
      color: theme.palette.secondary.contrastText,

      ".MuiTypography-root": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
  },
}));
