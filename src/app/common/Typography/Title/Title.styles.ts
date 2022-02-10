import styled from "styled-components";

export const TitleComponent = styled.h2`
  font-size: 64px;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary[100]};
  font-weight: 700;
  line-height: 83px;
`;
