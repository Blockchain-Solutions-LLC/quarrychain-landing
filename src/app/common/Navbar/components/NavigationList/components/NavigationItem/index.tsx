import { useEffect, useState } from "react";
import {
  InvisibleDiv,
  NavigationItemContainer,
  StyledSpan,
} from "./NavigationItem.styles";
import { NavigationItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { Menu } from "../Menu";
import { MenuItemType } from "../Menu/types";

export function NavigationItem({ title, url, menuItems }: NavigationItemProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuHeight, setMenuHeight] = useState<number>(null);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showMenu) {
      setMenuHeight(null);
      setShowSubMenu(false);
    }
  }, [showMenu]);

  function handleMenuItemClick(menuItem: MenuItemType) {
    if (menuItem?.subMenuItems?.length) {
      setShowSubMenu(!showSubMenu);
    } else {
      if (menuItem?.url.includes("https")) {
        window.open(menuItem?.url, "_blank");
      } else {
        navigate(menuItem.url || "/", { replace: true });
      }
    }
  }

  return (
    <NavigationItemContainer onClick={() => setShowMenu(true)}>
      <StyledSpan>{title}</StyledSpan>
      <InvisibleDiv onMouseLeave={() => setShowMenu(false)} height={menuHeight}>
        {!!menuItems?.length && (
          <Menu
            items={menuItems}
            show={showMenu}
            setMenuHeight={setMenuHeight}
            handleMenuItemClick={handleMenuItemClick}
            showSubMenu={showSubMenu}
          />
        )}
      </InvisibleDiv>
    </NavigationItemContainer>
  );
}
