import styled from "styled-components";
import media from "styled-media-query";
import { Paragraph } from "../../../../../../../../common/Typography/Paragraph";
import { Title } from "../../../../../../../../common/Typography/Title";
import { handleSliderContentColor } from "../../utils";

export const Container = styled.div<{ step: number }>`
  width: 75%;
  height: 350px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ step }) => step && handleSliderContentColor(step)};
  border-radius: 12px;
  padding: 50px 48px;
  transition: all 0.3s ease-in-out;

  ${media.lessThan("large")`
    width: 100%;
    min-height: 300px;
    height: 100%;
    padding: 20px;
    margin-bottom: 40px;
  `}
`;

export const TitleAndDescriptionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  ${media.lessThan("large")`
    width: 100%;
    align-items: center;
  `}
`;

export const StyledTitle = styled(Title)`
  font-size: 32px;
  line-height: 41px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[400]};
  margin-bottom: 16px;
`;

export const Description = styled(Paragraph)`
  font-size: 20px;
  line-height: 25px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[400]};
`;

export const HexagonImageContainer = styled.div`
  height: 100%;

  ${media.lessThan("large")`
      display: none;
  `}
`;

export const HexagonImage = styled.img`
  width: 100%;
  height: 100%;
`;
