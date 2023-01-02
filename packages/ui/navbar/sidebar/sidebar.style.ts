import { lighten, styled, SwipeableDrawer } from "@mui/material";

export const StyledIconContainer = styled("div")(({ theme }) => ({
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
    backgroundColor: lighten(theme.palette.primary.main, 0.4),

    borderRadius: sidebarSettings.borderRadius,
    margin: sidebarSettings.gap,
    height: `calc(100% - (${sidebarSettings.gap}px * 2))`,
    boxSizing: "border-box",
  },

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
