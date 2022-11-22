import { Content } from "../../common/Content";
import {
  ContentTitle,
  ContentParagraph,
} from "../../common/Content/Content.styles";

export function FAQ() {
  return (
    <Content>
      <ContentTitle>What is QuarryChain?</ContentTitle>
      <ContentParagraph>
        QuarryChain is an Advanced Decentralized Blockchain Platform that is
        dedicated to the establishment of a truly decentralized blockchain.
      </ContentParagraph>
      <ContentTitle>What is the QuarryChain Protocol?</ContentTitle>
      <ContentParagraph>
        The QuarryChain Protocol, aims to be one of the largest blockchain-based
        operating systems in the world, and will offer from not only public
        blockchain support of high throughput, but also high scalability, and
        high availability for all Decentralized Applications(DApps) in the
        QuarryChain Ecosystem.
      </ContentParagraph>
      <ContentTitle>What is QuarrySwap?</ContentTitle>
      <ContentParagraph>
        QuarrySwap is a decentralized exchange (DEX, for short), and one of
        QuarryChain's first Applications. QuarrySwap also happens to be
        non-custodial, meaning that unlike centralized exchanges, Quarryswap
        does not need to possess your tokens in order for you to be able to
        trade them. Instead, QuarrySwap allows users to trade trustfully,
        peer-to-peer, with liquidity that is supplied by other users. This means
        that new projects can easily connect to their desired markets as long as
        some entity is willing to provide the liquidity.
      </ContentParagraph>
      <ContentTitle>What is QuarryChain's Consensus Mechanism?</ContentTitle>
      <ContentParagraph>
        The QuarryChain consensus mechanism uses an innovative Delegated Proof
        of Stake system in which 27 Senior Representatives (SRs) produce blocks
        for the network. Every 6 hours, QuarryChain Token account holders who
        freeze their accounts can vote for a selection of SR candidates, with
        the top 27 candidates deemed the SRs. Voters may choose SRs based on
        criteria such as projects sponsored by SRs to increase QuarryChain's
        Token adoptions, and rewards distributed to voters. This allows for a
        more democratized and decentralized ecosystem. SRs' accounts are normal
        accounts, but their accumulation of votes allows them to produce blocks.
        QuarryChain's DPoS system offers an innovative mechanism resulting in
        2000 TPS compared to Bitcoin's 3 TPS and Ethereum's 15 TPS.
      </ContentParagraph>
      <ContentTitle>What is the Governance like on QuarryChain?</ContentTitle>
      <ContentParagraph>
        Every account in the QuarryChain Network can apply and have the
        opportunity to become a Senior Representative ( denoted as SR). Everyone
        can vote for SR candidates. The top 27 candidates with the most votes
        will become SRs with the right and obligation to generate blocks. The
        votes are counted every 6 hours and the SRs will change accordingly.
      </ContentParagraph>
      <ContentTitle>What is the QuarryChain Ecosystem?</ContentTitle>
      <ContentParagraph>
        QuarryChain is a robust blockchain ecosystem designed and developed by
        the QuarryChain development team, which follows QuarryChain’s Philosophy
        “Yes You Can”. There are multiple kinds of products involved in
        QuarryChain’s Ecosystem, including public chain, wallet client, and
        decentralized applications( MOAI, TUFF, TAP) Etc. These products are
        closely related to each other, and together, this supports the stability
        of the whole ecosystem.
      </ContentParagraph>
    </Content>
  );
}
