import { NavbarContainer } from "./Navbar.styles";
import { Logo } from "./components/Logo";
import { NavigationList } from "./components/NavigationList";
import { LaunchAndLanguage } from "./components/LaunchAndLanguage";

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
      <NavigationList />
      <LaunchAndLanguage />
    </NavbarContainer>
  );
}
