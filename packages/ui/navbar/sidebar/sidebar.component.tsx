import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { FC, useCallback, useState } from "react";
import NavbarItem, { INavbarItemProps } from "../navbar-item.component";
import { StyledIconContainer, StyledSidebar } from "./sidebar.style";

interface ISidebarProps {
  items: INavbarItemProps[];
}

export const Sidebar: FC<ISidebarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const handleOpen = useCallback(() => setIsOpen(true), [setIsOpen]);

  return (
    <div>
      <StyledIconContainer data-open={isOpen}>
        {!isOpen && <MenuIcon onClick={handleOpen} />}
      </StyledIconContainer>

      <StyledSidebar open={isOpen} onClose={handleClose} onOpen={handleOpen}>
        {items.map((item) => (
          <NavbarItem
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
      </StyledSidebar>
    </div>
  );
};
