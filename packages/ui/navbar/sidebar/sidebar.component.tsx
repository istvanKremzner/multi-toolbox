import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { INavbarItemProps } from "../navbar-item.component";
import {
  StyledHamburgerBarIcon,
  StyledSidebar,
  StyledSidebarItem,
} from "./sidebar.style";

interface ISidebarProps {
  items: INavbarItemProps[];
}

export const Sidebar: FC<ISidebarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const handleOpen = useCallback(() => setIsOpen(true), [setIsOpen]);

  return (
    <div>
      {!isOpen && (
        <StyledHamburgerBarIcon>
          <MenuIcon onClick={handleOpen} />
        </StyledHamburgerBarIcon>
      )}

      <StyledSidebar open={isOpen} onClose={handleClose} onOpen={handleOpen}>
        <nav>
          {items.map((item) => (
            <StyledSidebarItem
              key={item.title}
              {...item}
              onClick={(event) => {
                if (item.onClick) {
                  item.onClick(event);
                }
                handleClose();
              }}
            />
          ))}
        </nav>
      </StyledSidebar>
    </div>
  );
};
