import styled from "styled-components";
import { Title } from "../../../../common/Typography/Title";

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[50]};
`;

export const Content = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 80px;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
