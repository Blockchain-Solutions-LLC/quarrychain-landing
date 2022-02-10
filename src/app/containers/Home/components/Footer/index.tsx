import { GenesisTeam } from "./components/GenesisTeam";
import { SocialPlatforms } from "./components/SocialPlatforms";
import { Support } from "./components/Support";
import { Container, Content } from "./Footer.styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <SocialPlatforms />
        <Support />
        <GenesisTeam />
      </Content>
    </Container>
  );
}
