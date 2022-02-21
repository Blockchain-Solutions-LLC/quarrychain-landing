import { assetPaths } from "../../../../common/constants";
import { Title } from "../../../../common/Typography/Title";
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
            Quarrychain the future of decentralized exchanges.
          </StyledTitle>
          <SloganContainer>
            <StyledSpan>
              the most rewarding decentralized platform in the universe.
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
