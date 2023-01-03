import { alpha, styled } from "@mui/material";

const NAVBAR_RADIUS = 16;
const NAVBAR_HEIGHT = {
  normal: "1vh",
  hovered: "1.6vh",
};

export const StyledNavbar = styled("nav")(({ theme }) => ({
  transition: "all 1s ease-in-out",

  width: "60%",
  position: "fixed",
  top: 4,
  left: "20%",
  zIndex: 100,

  color: theme.palette.primary.contrastText,
  borderBottomRightRadius: NAVBAR_RADIUS,
  borderBottomLeftRadius: NAVBAR_RADIUS,

  backgroundColor: alpha(theme.palette.primary.dark, 0.8),
  borderRadius: 64,
  boxshadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  "-webkit-backdrop-filter": "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",

  ul: {
    padding: theme.spacing(0, 1),
    color: "inherit",
    transition: "all .25s",

    height: NAVBAR_HEIGHT.normal,

    display: "flex",
    gap: 16,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  "&:hover": {
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

  textAlign: "center",
  flex: 1,
  padding: theme.spacing("6px", 0),
  fontSize: "1.2rem",

  ":hover": {
    backgroundColor: alpha(theme.palette.primary.contrastText, 0.25),
    borderRadius: 64,
    boxshadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    "-webkit-backdrop-filter": "blur(5px)",
    outline: "1px solid rgba(255, 255, 255, 0.3)",
  },

  ":active": {
    transition: "all .2s",
    padding: 0,
    flex: 0.2,
  },
}));
