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

export function QuarrySwapDetails() {
  return (
    <Content>
      <Container>
        <MainText>
          <ContentTitle>What is QuarrySwap?</ContentTitle>
          <ContentParagraph>
            QuarrySwap is a decentralized exchange (DEX, for short), and one of Quarrychain's first Applications. QuarrySwap also happens to be non-custodial, meaning that unlike centralized exchanges, QuarrySwap does not need to possess your tokens in order for you to be able to trade them. Instead, QuarrySwap allows users to trade trustfully, peer-to-peer, with liquidity that is supplied by other users. This means that new projects can easily connect to their desired markets as long as some entity is willing to provide the liquidity.
          </ContentParagraph>
        </MainText>
        <ImageContainer>
          <TokenLogo src={assetPaths.SWAP} />
        </ImageContainer>
      </Container>
    </Content>
  );
}
