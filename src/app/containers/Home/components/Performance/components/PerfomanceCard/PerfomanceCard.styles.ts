import styled from "styled-components";
import { Span } from "../../../../../../common/Typography/Span";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.2);
  background: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[0]};
  border-radius: 12px;
  padding: 20px;
`;

export const TitleAndValueContainer = styled.div`
  min-height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div<{ isTitle?: boolean }>`
  ${({ isTitle }) =>
    isTitle &&
    `
margin-bottom: 10px;

`}
`;

export const StyledSpan = styled(Span)<{ isTitle?: boolean }>`
font-size: 24px;
line-height: 31px;
color ${({
  theme: {
    colors: { neutral },
  },
}) => neutral[400]};

${({
  isTitle,
  theme: {
    colors: { neutral },
  },
}) =>
  isTitle &&
  `
  color: ${neutral[150]};
`}

`;
