import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const SocialMediaIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 55px);
  column-gap: 40px;
  row-gap: 40px;

  ${media.between("medium", "large")`
    column-gap: 12px;
    row-gap: 12px;
  `};

  ${media.lessThan("medium")`
    column-gap: 20px;
    row-gap: 20px;
  `}
`;

export const SingleIcon = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({
      theme: {
        colors: { neutral },
      },
    }) => neutral[0]};
  background: inherit;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;

  svg {
    font-size: 24px;
    fill: ${({
      theme: {
        colors: { neutral },
      },
    }) => neutral[0]};
  }

  :hover {
    background: ${({
      theme: {
        colors: { neutral },
      },
    }) => neutral[0]};

    svg {
      fill: ${({
        theme: {
          colors: { secondary },
        },
      }) => secondary[200]};
      background: ${({
        theme: {
          colors: { neutral },
        },
      }) => neutral[0]};
      transition: all 0.3s ease-in-out;
    }
  }

  ${media.between("medium", "large")`
   height: 40px;
   width: 40px;
   svg {
     font-size: 18px;
   }
  `};
`;
