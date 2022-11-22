import { StyledTitle } from "../../Footer.styles";
import { Container, SocialMediaIcons } from "./SocialPlatforms.styles";
import { SocialPlatformProps } from "./types";
import { socialPlatformItemsToShow } from "./utils";

export function SocialPlatforms({
  numberOfItems,
  noTitle,
  invertColors,
  smallSize,
}: SocialPlatformProps) {
  return (
    <Container>
      {!noTitle && <StyledTitle>QuarryChain Social Platform</StyledTitle>}
      <SocialMediaIcons smallSize={smallSize}>
        {socialPlatformItemsToShow(numberOfItems, invertColors, smallSize)}
      </SocialMediaIcons>
    </Container>
  );
}
