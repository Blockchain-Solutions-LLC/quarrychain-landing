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
} from "../Tokens.styles";

export function QuarryCoin() {
  return (
    <Content>
      <Container>
        <MainText>
          <ContentTitle>What is Quary Coin?</ContentTitle>
          <ContentParagraph>
            QuarryCoin is the official cryptocurrency for the Quarrychain
            Protocol. Quarrycoin aims to be a peer-to-peer internet currency
            that enables instant low cost transactions to anyone in the world.
            Quarrycoin will feature faster transaction confirmation times and
            improved storage efficiency than the leading math-based currency.
          </ContentParagraph>
        </MainText>
        <ImageContainer>
          <TokenLogo src={assetPaths.QUARRY_COIN} />
        </ImageContainer>
      </Container>
    </Content>
  );
}
