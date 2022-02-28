import { SocialPlatforms } from "../../../../containers/Home/components/Footer/components/SocialPlatforms";
import { assetPaths } from "../../../constants";
import { navbarItems } from "../../constants";
import {
  Container,
  InvisibleDiv,
  LogosContainer,
  MainContent,
  MenuFooter,
  MenuWrapper,
  QuarrychainLogo,
  QuarrychainLogoContainer,
  QuarrychainTextLogo,
  QuarrychainTextLogoContainer,
} from "./HamburgerMenu.styles";
import { HamburgerNavbarItem } from "./HamburgerNavbarItem";
import { HamburgerMenuProps } from "./types";

export function HamburgerMenu({ hide }: HamburgerMenuProps) {
  return (
    <Container>
      <InvisibleDiv onClick={hide} />
      <MenuWrapper>
        <MainContent>
          <LogosContainer>
            <QuarrychainLogoContainer>
              <QuarrychainLogo src={assetPaths.LOGO} />
            </QuarrychainLogoContainer>
            <QuarrychainTextLogoContainer>
              <QuarrychainTextLogo src={assetPaths.QUARRYCHAIN_NAME} />
            </QuarrychainTextLogoContainer>
          </LogosContainer>
          {navbarItems.map((navbarItem) => (
            <HamburgerNavbarItem item={navbarItem} hideMenu={hide} />
          ))}
        </MainContent>
        <MenuFooter>
          <SocialPlatforms numberOfItems={4} noTitle invertColors smallSize />
        </MenuFooter>
      </MenuWrapper>
    </Container>
  );
}
