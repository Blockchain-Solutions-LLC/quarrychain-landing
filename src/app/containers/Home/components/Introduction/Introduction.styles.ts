import styled from "styled-components";
import { Button } from "../../../../common/Button";
import { assetPaths } from "../../../../common/constants";
import { Span } from "../../../../common/Typography/Span";

export const Container = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${assetPaths.HOME_BACKGROUND});
  background-repeat: no-repeat;
  padding-top: 80px;
}
`;

export const Content = styled.div`
  width: 84%;
  height: 80%;
  display: flex;
`;

export const TitleAndButtonsContainer = styled.div`
  width: 100%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SloganContainer = styled.div`
  width: 100%;
  margin: 8px 0px 32px 0px;
`;

export const StyledSpan = styled(Span)`
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[200]};
  font-size: 32px;
  line-height: 42px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)<{ withMarginRight?: boolean }>`
  max-width: 200px;

  ${({ withMarginRight }) =>
    withMarginRight &&
    `
  margin-right: 24px;
  `}
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const PolygonsImage = styled.img`
  width: 610px;
  animation: MoveUpDown 4s linear infinite;
  position: absolute;

  @keyframes MoveUpDown {
    0%,
    100% {
      top: 0;
    }
    50% {
      top: 65px;
    }
  }
`;
