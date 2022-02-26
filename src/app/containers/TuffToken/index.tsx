import { assetPaths } from "../../common/constants";
import { Content } from "../../common/Content";
import {
  ContentTitle,
  ContentParagraph,
} from "../../common/Content/Content.styles";
import {
  Container,
  ImageContainer,
  MainText,
  TuffTokenLogo,
} from "./TuffToken.styles";

export function TuffToken() {
  return (
    <Content>
      <Container>
        <MainText>
          <ContentTitle>What is Tuff Token?</ContentTitle>
          <ContentParagraph>
            TUFF tokens are a crucial component of the Quarrychain DeFi. This
            token is named after the volcanic rock known as “Tuff” and this is
            the type of Rock that was used to create the Moai Statues. In the
            Quarrychain Network, it's purpose is to take part in decentralized
            lending, insurance, liquidity, stable coins, etc. TUFF is completely
            initiated, driven and developed by the TUFF community. All of TUFF's
            functionalities will be implemented by open-source smart contracts,
            and is wholly operated by the community. The functionalities are
            developed based on community initiatives. All proposals and decision
            making are voted via TUFF within the community, minority obeys
            majority. TUFF will be deployed on the Quarry Virtual Machine with
            smart contract, becoming a nexus closely correlated with other
            existing DeFi projects.
          </ContentParagraph>
          <ContentParagraph>
            1. TUFF Issuance TUFF is the digital asset, TUFF in abbreviation,
            based on the QRY20, the technical standard used for tokens within
            smart contracts on the Quarrychain Blockchain. Total token supply is
            1,000,000,000,000,000.
          </ContentParagraph>
          <ContentParagraph>
            2. TUFF Distribution The distribution of the TUFF is completely
            decentralized via mining based on the smart contract. The only way
            to mine TUFF is to stake QRY or QRY20 Tokens (include Liquidity
            Provider LP Tokens
          </ContentParagraph>
        </MainText>
        <ImageContainer>
          <TuffTokenLogo src={assetPaths.TUFF_TOKEN} />
        </ImageContainer>
      </Container>
    </Content>
  );
}
