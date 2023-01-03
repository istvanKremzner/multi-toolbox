import {
  alpha,
  darken,
  IconButton,
  lighten,
  styled,
  SwipeableDrawer,
} from "@mui/material";
import NavbarItem from "../navbar-item.component";

export const StyledHamburgerBarIcon = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  top: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: 1300,

  ":hover": {
    color: theme.palette.primary.light,
  },

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const sidebarSettings = {
  borderRadius: 24,
  gap: 8,
};

export const StyledSidebar = styled(SwipeableDrawer)(({ theme }) => ({
  ".MuiPaper-root": {
    padding: theme.spacing(4, 0),

    color: theme.palette.primary.contrastText,

    borderRadius: sidebarSettings.borderRadius,
    margin: sidebarSettings.gap,
    height: `calc(100% - (${sidebarSettings.gap}px * 2))`,
    boxSizing: "border-box",

    background: alpha(theme.palette.primary.main, 0.6),
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    "-webkit-backdrop-filter": "blur(5px)",
    outline: "1px solid rgba(255, 255, 255, 0.3)",
  },

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const StyledSidebarItem = styled(NavbarItem)(({ theme }) => ({
  margin: theme.spacing(0, 1),

  ":hover": {
    borderRadius: theme.spacing(2),

    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    "-webkit-backdrop-filter": "blur(5px)",
    outline: "1px solid rgba(255, 255, 255, 0.3)",
    color: theme.palette.primary.contrastText,
    backgroundColor: alpha(lighten(theme.palette.primary.light, 0.7), 0.4),
    opacity: 1,
    filter: "brightness(1)",
  },

  ":active": {
    transition: "all .5s",
    paddingLeft: theme.spacing(14),
    paddingRight: theme.spacing(2),
  },

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
