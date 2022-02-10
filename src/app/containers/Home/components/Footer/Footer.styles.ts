import styled from "styled-components";
import { Span } from "../../../../common/Typography/Span";
import { Title } from "../../../../common/Typography/Title";

export const Container = styled.footer`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary[200]};
`;

export const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

export const StyledTitle = styled(Title)`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 24px;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary[50]};
`;

export const TextContainer = styled.div`
  margin-bottom: 8px;
`;

export const StyledSpan = styled(Span)<{ darker?: boolean }>`
  font-size: 20px;
  line-height: 25px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[25]};

  ${({
    theme: {
      colors: { neutral },
    },
    darker,
  }) =>
    darker &&
    `
    color: ${neutral[200]};
  
  
  `}
`;
