import { FC, useEffect, useRef } from "react";
import NavbarItem, { INavbarItemProps } from "./navbar-item.component";
import { StyledNavbar } from "./navbar.style";

interface INavbarProps {
  items: INavbarItemProps[];
  hideAt?: number;
  onClick?: (event: React.MouseEvent) => void;
}

export const Navbar: FC<INavbarProps> = ({ items, onClick, hideAt = 400 }) => {
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateTop = () => {
      const isShown = window.pageYOffset < hideAt;
      const distanceToTop = 1 - window.pageYOffset / hideAt + 0.5;

      if (navbarRef.current) {
        navbarRef.current.style.top = `${isShown ? 0 : -100}px`;
        navbarRef.current.style.opacity = (
          isShown ? distanceToTop : 0
        ).toString();
      }
    };

    updateTop();
    window.addEventListener("scroll", updateTop);

    return () => {
      window.removeEventListener("scroll", updateTop);
    };
  }, [hideAt]);

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
