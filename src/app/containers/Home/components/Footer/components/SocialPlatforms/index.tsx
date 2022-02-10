import { Icon } from "../../../../../../common/Icon";
import { socialMediaIconNames } from "../../constants";
import { StyledTitle } from "../../Footer.styles";
import {
  Container,
  SocialMediaIcons,
  SingleIcon,
} from "./SocialPlatforms.styles";

export function SocialPlatforms() {
  return (
    <Container>
      <StyledTitle>Quarrychain Social Platform</StyledTitle>
      <SocialMediaIcons>
        {socialMediaIconNames.map((icon) => (
          <SingleIcon>
            <Icon name={icon} />
          </SingleIcon>
        ))}
      </SocialMediaIcons>
    </Container>
  );
}
