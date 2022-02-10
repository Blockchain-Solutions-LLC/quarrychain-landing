import styled from "styled-components";
import { Span } from "../../../../../Typography/Span";

export const Container = styled.div<{ show?: boolean }>`
  min-width: 200px;
  display: none;
  position: absolute;
  transition: none;
  top: 75px;
  left: 0px;
  background: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[50]};
  padding: 16px;
  border-radius: 12px;

  ${({ show }) =>
    show &&
    `
    display: flex;
    flex-direction: column;
    z-index: 2;
    transition: all 0.3s ease-in-out;

  `}
`;

export const ItemContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;

  :hover {
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
  }

  :last-child {
    margin-bottom: 0px;
  }
`;

export const StyledSpan = styled(Span)`
  font-size: 18px;
  line-height: 18px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[400]};
`;
