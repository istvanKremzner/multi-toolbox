import { Link, Navbar as NextNavbar } from "@nextui-org/react";
import { FC } from "react";

interface INavbarProps {
  items: {
    isActive?: boolean;
    label: string;
    href: string;
  }[];
}

export const Navbar: FC<INavbarProps> = ({ items }) => {
  return (
    <NextNavbar isCompact shouldHideOnScroll>
      <NextNavbar.Toggle aria-label="toggle navigation" showIn="xs" />

      <NextNavbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
      >
        {items.map((item) => (
          <NextNavbar.Item activeColor="primary" isActive={item.isActive}>
            <NextNavbar.Link
              key={item.label}
              href={item.href}
              activeColor="secondary"
            >
              {item.label}
            </NextNavbar.Link>
          </NextNavbar.Item>
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
