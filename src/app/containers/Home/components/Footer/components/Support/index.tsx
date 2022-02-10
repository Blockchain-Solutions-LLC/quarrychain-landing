import { StyledSpan, StyledTitle, TextContainer } from "../../Footer.styles";
import { Container } from "./Support.styles";

export function Support() {
  return (
    <Container>
      <StyledTitle>Support</StyledTitle>
      <TextContainer>
        <StyledSpan>FAQ</StyledSpan>
      </TextContainer>
      <TextContainer>
        <StyledSpan>Contact us</StyledSpan>
      </TextContainer>
      <TextContainer>
        <StyledSpan darker>quarrychain@gmail.com</StyledSpan>
      </TextContainer>
    </Container>
  );
}
