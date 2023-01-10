import { Link, Navbar as NextNavbar } from "@nextui-org/react";
import NextLink from "next/link";
import { FC, useCallback, MouseEvent } from "react";

interface INavbarProps {
  items: {
    isActive?: boolean;
    label: string;
    href: string;
  }[];
}

export const Navbar: FC<INavbarProps> = ({ items }) => {
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
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.href}
            >
              {item.label}
            </Link>
          </NextNavbar.CollapseItem>
        ))}
      </NextNavbar.Collapse>
    </NextNavbar>
  );
};
