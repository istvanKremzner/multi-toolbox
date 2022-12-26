import { FC, useEffect, useRef } from "react";
import NavbarItem, { INavbarItemProps } from "./navbar-item.component";
import { StyledNavbar } from "./navbar.style";

interface INavbarProps {
  items: INavbarItemProps[];
  onClick?: (event: React.MouseEvent) => void;
}

export const Navbar: FC<INavbarProps> = ({ items, onClick }) => {
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateTop = () => {
      const shouldShow = window.pageYOffset < 400;

      if (navbarRef.current) {
        navbarRef.current.style.top = `${shouldShow ? 0 : -100}px`;
        navbarRef.current.style.opacity = (shouldShow ? 1 : 0).toString();
      }
    };

    updateTop();
    window.addEventListener("scroll", updateTop);

    return () => {
      window.removeEventListener("scroll", updateTop);
    };
  }, []);

  return (
    <StyledNavbar ref={navbarRef} onClick={onClick}>
      <ul>
        {items.map((item) => (
          <NavbarItem key={item.title} {...item} />
        ))}
      </ul>
    </StyledNavbar>
  );
};
