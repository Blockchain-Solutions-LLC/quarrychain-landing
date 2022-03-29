import styled from "styled-components";
import media from "styled-media-query";
const isSafari = (window as any).safari;

console.log("logo", isSafari);
export const LogoContainer = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;

  ${isSafari && `
    width: auto;
    display: block;
  `}
`;

export const TextLogoImage = styled.img`
  height: 24px;
  margin-left: 13px;

  ${media.between("medium", "huge")`
    height: 18px;
  `};

  ${isSafari && `
    display: block;
  `}
`;
