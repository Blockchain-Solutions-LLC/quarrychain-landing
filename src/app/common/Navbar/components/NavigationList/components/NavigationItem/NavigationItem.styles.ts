import styled from "styled-components";
import media from "styled-media-query";
import { Span } from "../../../../../Typography/Span";

export const NavigationItemContainer = styled.div`
  position: relative;
  height: 100%;
  min-width: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
  cursor: pointer;
  border-radius: 12px;
  z-index: 2;
  padding: 16px;

  :hover {
    background-color: ${({
  theme: {
    colors: { neutral },
  },
}) => neutral[50]};
    transition: all 0.3s ease-in-out;
  }

  ${media.between("large", "huge")`
    min-width: 80;
    margin-right: 25px;
  `};

  ${media.between("medium", "large")`
    min-width: 0;
    padding: initial;
    margin-right: 10px;
  `};
`;

export const InvisibleDiv = styled.div<{ height?: number }>`
  position: absolute;
  width: 100%;
  top: 0px;
  background: transparent;

  ${({ height }) =>
    height &&
    `
  height: ${height}px;
  `}
`;

export const StyledSpan = styled(Span)`
  color ${({
  theme: {
    colors: { neutral },
  },
}) => neutral[400]};
  user-select: none;
  font-size: 18px;
  line-height: 18px;

  ${media.between("medium", "large")`
    font-size: 14px;
    line-height: 14px;
  `};
`;
