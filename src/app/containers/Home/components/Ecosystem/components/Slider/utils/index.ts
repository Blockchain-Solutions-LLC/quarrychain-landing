import { assetPaths } from "../../../../../../../common/constants";
import { AppTheme } from "../../../../../../../global/theme";

export function handleSliderContentColor(step: number): string {
  if (step === 1 || step === 4) return AppTheme.colors.regular["lightRed"];
  if (step === 2 || step === 5) return AppTheme.colors.regular["lightGreen"];
  return AppTheme.colors.regular["lightBlue"];
}

export function handleSliderContentTitle(step: number): string {
  switch (step) {
    case 1:
      return "Quarry Wallet";
    case 2:
      return "Block Explorer";
    case 3:
      return "Quarry Coin";
    case 4:
      return "Tuff Token";
    case 5:
      return "Moai Token";
    default:
      return "Tap Token";
  }
}

export function handleSliderContentDescription(step: number): string {
  switch (step) {
    case 1:
      return "QuarryWallet-Cli is the official wallet client maintained by the Quarrychain Foundation QuarryWallet-Cli is a command-line version of the wallet, provides essential tools to communicate with the Quarry public chain by the RPC protocol, supports all functions of the Quarry public chain in real-time. QuarryWallet-Cli is also an excellent code implementation to show the interactive mode between clients and the blockchain for developers.";
    case 2:
      return "Quarryscan.org is the first blockchain explorer based on Quarrychain. quarryscan.org has all the essential functions of a blockchain explorer, including searching transactions/accounts/ blocks/ nodes/ smart contracts, on-chain statistics, token creation, Etc. quarryscan.org also has a built-in web wallet and a DEX based on the Bancor Protocol, and they enrich the application matrix of Quarryscan.";
    case 3:
      return "QuarryCoin is the official cryptocurrency for the Quarrychain Protocol. Quarrycoin aims to be a peer-to-peer internet currency that enables instant low cost transactions to anyone in the world. Quarrycoin will feature faster transaction confirmation times and improved storage efficiency than the leading math-based currency.";
    case 4:
      return "TUFF tokens are a crucial component of the Quarrychain DeFi. This token is named after the volcanic rock known as “Tuff” and this is the type of Rock that was used to create the Moai Statues. In the Quarrychain Network, it's purpose is to take part in decentralized lending, insurance, liquidity, stable coins, etc. TUFF is completely initiated, driven and developed by the TUFF community. All of TUFF's functionalities will be implemented by open-source smart contracts, and is wholly operated by the community.";
    case 5:
      return "Moai is a community-driven organization built to solve what is known as the “liquidity problem”. One could define this problem as the inability of disparate forms of liquidity to connect with markets in a ecentralized way, and vice versa. While on the other hand, other solutions will provide incrementally progressive advances toward solving the problem of liquidity, Moai’s progress is intended to create a broader range of network effects. Rather than limiting itself to a single solution, Moai intertwines many decentralized markets and instruments.";
    default:
      return "Quarrychain’s TAP token project is a cryptocurrency basic income program designed to create a more equitable distribution of water. The project aims to be a cap-and-trade program for water use (currently) in the United States of America. Coupled with the advanced capabilities of the Quarry Virtual Machine (QVM) to predict future value and recommended strategic investments.";
  }
}

export function handleSliderContentImage(step: number): string {
  switch (step) {
    case 1:
      return assetPaths.QUARRY_WALLET;
    case 2:
      return assetPaths.BLOCK_EXPLORER;
    case 3:
      return assetPaths.QUARRY_COIN_HEXAGON;
    case 4:
      return assetPaths.TUFF_TOKEN_HEXAGON;
    case 5:
      return assetPaths.MOAI_TOKEN_HEXAGON;
    default:
      return assetPaths.TAP_TOKEN_HEXAGON;
  }
}
