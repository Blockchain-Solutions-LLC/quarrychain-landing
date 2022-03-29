import styled from "styled-components";
import media from "styled-media-query";
const isSafari = (window as any).safari;

export const LogoContainer = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImageContainer = styled.div`
  height: 46px;
  ${isSafari && `
    width: 46px !important;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;

  ${isSafari && `
    display: block;
    width: auto;
    height: auto;
  `}
`;

export const TextLogoImageContainer = styled.div`
  height: 46px;
  ${isSafari && `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}

  ${media.between("medium", "huge")`
    height: 18px;
  `};
`

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
