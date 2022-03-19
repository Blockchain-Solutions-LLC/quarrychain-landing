import { assetPaths } from "../../../../common/constants";
import {
  ButtonsContainer,
  Container,
  Content,
  ImageContainer,
  ImageContainerMobile,
  PolygonsImage,
  SloganContainer,
  StyledButton,
  StyledSpan,
  TitleAndButtonsContainer,
  StyledTitle,
} from "./Introduction.styles";

export function Introduction() {
  return (
    <Container>
      <Content>
        <TitleAndButtonsContainer>
          <StyledTitle>
            Quarrychain
          </StyledTitle>
          <SloganContainer>
            <StyledSpan>
              An Advanced Decentralized Blockchain Platform
            </StyledSpan>
          </SloganContainer>
          <ImageContainerMobile>
            <PolygonsImage src={assetPaths.POLYGONS} />
          </ImageContainerMobile>
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
