import {
  Button,
  css,
  Link,
  Navbar as NextNavbar,
  styled,
  theme,
  useTheme,
} from "@nextui-org/react";
import NextLink from "next/link";
import { FC, useCallback, MouseEvent } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme as useNextTheme } from "next-themes";

interface INavbarProps {
  items: {
    label: string;
    href: string;
  }[];
}

const StyledDropdownMenuLink = styled(NextLink, {
  color: "var(--nextui-colors-text)",
  minWidth: "100%",

  "&:hover": {
    color: "var(--nextui-colors-primary)",
  },
});

export const Navbar: FC<INavbarProps> = ({ items }) => {
  const { isDark } = useTheme();
  const { setTheme } = useNextTheme();

  const handleThemeChange = () => setTheme(isDark ? "light" : "dark");

  const stopLinkPropagation = useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  return (
    <NextNavbar isCompact shouldHideOnScroll>
      <NextNavbar.Toggle aria-label="toggle navigation" showIn="xs" />

      <NextNavbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        css={{ width: "100%" }}
      >
        {items.map((item) => (
          <NextLink
            key={item.label}
            href={item.href}
            onClick={stopLinkPropagation}
          >
            {item.label}
          </NextLink>
        ))}
      </NextNavbar.Content>

      <NextNavbar.Collapse showIn="xs">
        {items.map((item) => (
          <NextNavbar.CollapseItem key={item.label}>
            <StyledDropdownMenuLink href={item.href}>
              {item.label}
            </StyledDropdownMenuLink>
          </NextNavbar.CollapseItem>
        ))}
      </NextNavbar.Collapse>

      <Button
        animated={false}
        size="xs"
        css={{
          cursor: "pointer",
          background: "transparent",
          border: "none",
          padding: 0,

          marginLeft: "auto",
          color: "$text",
          boxSizing: "content-box",
          width: "var(--nextui--navbarHeight)",
          height: "var(--nextui--navbarHeight)",

          transition: "all .1s ease-in-out",

          "&:hover": {
            transform: "scale(1.05)",
            background: "transparent",
            color: isDark ? "$yellow800" : "$colors$accents8",
          },
        }}
      >
        {isDark ? (
          <SunIcon width={24} height={24} onClick={handleThemeChange} />
        ) : (
          <MoonIcon width={24} height={24} onClick={handleThemeChange} />
        )}
      </Button>
    </NextNavbar>
  );
};
