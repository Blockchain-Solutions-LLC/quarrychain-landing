import styled from "styled-components";
import { Title } from "../../../../common/Typography/Title";

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`;
