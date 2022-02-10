import { StyledSpan, StyledTitle, TextContainer } from "../../Footer.styles";
import { Container } from "./GenesisTeam.styles";

export function GenesisTeam() {
  return (
    <Container>
      <StyledTitle>Genesis Team</StyledTitle>
      <TextContainer>
        <StyledSpan>Alec Arrambide - CEO/ Founder</StyledSpan>
      </TextContainer>
      <TextContainer>
        <StyledSpan>Riley Gillespie - CMO</StyledSpan>
      </TextContainer>
    </Container>
  );
}
