import { useState } from "react";
import { NavbarContainer } from "./Navbar.styles";
import { Logo } from "./components/Logo";
import { NavigationList } from "./components/NavigationList";
import { LaunchAndLanguage } from "./components/LaunchAndLanguage";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { HamburgerIcon } from "./components/HamburgerIcon";

export default function Navbar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>();

  function handleHamburgerIconClick() {
    setShowHamburgerMenu(true);
  }

  return (
    <>
      <NavbarContainer>
        <Logo />
        <NavigationList />
        <LaunchAndLanguage />
        <HamburgerIcon onClick={handleHamburgerIconClick} />
      </NavbarContainer>
      {showHamburgerMenu && (
        <HamburgerMenu hide={() => setShowHamburgerMenu(false)} />
      )}
    </>
  );
}
