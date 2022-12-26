import { FC, useCallback } from "react";
import { useRouter } from "next/navigation";
import { StyledNavbarItem } from "./navbar.style";

export interface INavbarItemProps {
  title: string;
  onClick?: (event: React.MouseEvent) => void;
  url?: string;
  className?: string;
}

const NavbarItem: FC<INavbarItemProps> = ({
  onClick,
  title,
  url,
  className,
}) => {
  const router = useRouter();

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (onClick) {
        onClick(event);
      }

      if (url) {
        router.push(url);
      }
    },
    [onClick, router, url]
  );

  return (
    <StyledNavbarItem className={className} onClick={handleClick}>
      {title}
    </StyledNavbarItem>
  );
};

export default NavbarItem;
