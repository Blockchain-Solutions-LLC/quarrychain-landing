import { assetPaths } from "../../../common/constants";
import { Content } from "../../../common/Content";
import {
  ContentTitle,
  ContentParagraph,
} from "../../../common/Content/Content.styles";
import {
  Container,
  ImageContainer,
  MainText,
  TokenLogo,
} from "../General.styles";

export function RealWorldAssets() {
  return (
    <Content>
      <Container>
        <MainText>
          <ContentTitle>Tokenization of Real-World Assets</ContentTitle>
          <ContentParagraph>
            QuarryChain enables tokenization of assets in a variety of industries to create vast liquidity across the whole global asset market. QuarrySwap can turn almost any asset, real or virtual, into a digital token to be owned, traded, transferred, or stored without the use of a central third-party or intermediary. QuarryChain’s QRY-20 smart contracts power QuarrySwap’s tokenization features and associated digital assets.
          </ContentParagraph>
        </MainText>
        <ImageContainer>
          <TokenLogo src={assetPaths.ASSETS_SYMBOL} />
        </ImageContainer>
      </Container>
    </Content>
  );
}
