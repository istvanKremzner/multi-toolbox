import { SwipeableDrawer, lighten } from "@mui/material";
import { styled } from "@mui/system";

const NAVBAR_RADIUS = 16;
const NAVBAR_HEIGHT = {
  normal: "1vh",
  hovered: "2vh",
};

export const StyledNavbar = styled("nav")(({ theme }) => ({
  transition: "all 1s ease-in-out",

  width: "100%",
  position: "fixed",
  top: 0,
  zIndex: 100,

  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.dark,
  backdropFilter: "saturate(180%) blur(10px)",
  opacity: 0.9,

  borderBottomRightRadius: NAVBAR_RADIUS,
  borderBottomLeftRadius: NAVBAR_RADIUS,

  ul: {
    color: "inherit",
    transition: "all .25s",

    width: "100%",
    height: NAVBAR_HEIGHT.normal,

    display: "flex",
    gap: 16,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  "&:hover": {
    opacity: 1,

    ul: {
      height: NAVBAR_HEIGHT.hovered,
    },
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledNavbarItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  cursor: "pointer",

  padding: theme.spacing("10px", 8),
  fontSize: "1.2rem",

  ":hover": {
    borderRadius: theme.spacing(4),

    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.dark,
    filter: "brightness(.9)",
  },
}));
