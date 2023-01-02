import { styled, Card } from "ui";

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "clamp(200px, 25%, 500px)",
  height: "fit-content",

  outline: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "16px",

  cursor: "pointer",

  ":hover": {
    transition: "all .25s ease-in-out",

    outlineColor: theme.palette.secondary.light,
    outlineWidth: 2,
    transform: "scale(1.01)",
  },
}));
