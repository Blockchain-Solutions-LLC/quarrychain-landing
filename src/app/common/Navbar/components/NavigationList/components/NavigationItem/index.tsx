import {
  InvisibleDiv,
  NavigationItemContainer,
  StyledSpan,
} from "./NavigationItem.styles";
import { NavigationItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { Menu } from "../Menu";
import { useEffect, useState } from "react";

export function NavigationItem({ title, url, menuItems }: NavigationItemProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuHeight, setMenuHeight] = useState<number>(null);
  const navigate = useNavigate();
  function handleItemClick(url: string) {
    navigate(url);
  }

  useEffect(() => {
    if (!showMenu) {
      setMenuHeight(null);
    }
  }, [showMenu]);

  return (
    <NavigationItemContainer
      onClick={() => handleItemClick(url)}
      onMouseEnter={() => setShowMenu(true)}
    >
      <StyledSpan>{title}</StyledSpan>
      <InvisibleDiv onMouseLeave={() => setShowMenu(false)} height={menuHeight}>
        {!!menuItems?.length && (
          <Menu
            items={menuItems}
            show={showMenu}
            setMenuHeight={setMenuHeight}
          />
        )}
      </InvisibleDiv>
    </NavigationItemContainer>
  );
}
