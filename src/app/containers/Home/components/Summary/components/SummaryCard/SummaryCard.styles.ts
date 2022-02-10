import styled from "styled-components";
import { Paragraph } from "../../../../../../common/Typography/Paragraph";
import { Title } from "../../../../../../common/Typography/Title";

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  position: relative;
`;

export const Content = styled.div`
  min-height: 270px;
  display: flex;
  flex-direction: column;
  padding: 22px 30px;
  box-shadow: 4px 8px 30px 0px rgba(0, 0, 0, 0.2);
  background ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[0]};
`;

export const StyledTitle = styled(Title)`
  font-size: 32px;
  line-height: 41px;
  margin-bottom: 8px;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 18px;
  line-height: 18px;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary[0]};
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 150px;
  bottom: -100px;
  left: 140px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
