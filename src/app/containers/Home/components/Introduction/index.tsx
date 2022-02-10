import { assetPaths } from "../../../../common/constants";
import { Title } from "../../../../common/Typography/Title";
import {
  ButtonsContainer,
  Container,
  Content,
  ImageContainer,
  PolygonsImage,
  SloganContainer,
  StyledButton,
  StyledSpan,
  TitleAndButtonsContainer,
} from "./Introduction.styles";

export function Introduction() {
  return (
    <Container>
      <Content>
        <TitleAndButtonsContainer>
          <Title>Quarrychain the future of decentralized exchanges.</Title>
          <SloganContainer>
            <StyledSpan>
              the most rewarding decentralized platform in the universe.
            </StyledSpan>
          </SloganContainer>
          <ButtonsContainer>
            <StyledButton withMarginRight>Launch App</StyledButton>
            <StyledButton variant="secondary">Learn More</StyledButton>
          </ButtonsContainer>
        </TitleAndButtonsContainer>
        <ImageContainer>
          <PolygonsImage src={assetPaths.POLYGONS} />
        </ImageContainer>
      </Content>
    </Container>
  );
}
