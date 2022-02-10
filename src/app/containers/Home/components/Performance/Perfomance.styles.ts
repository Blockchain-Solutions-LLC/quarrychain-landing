import styled from "styled-components";
import { assetPaths } from "../../../../common/constants";
import { Span } from "../../../../common/Typography/Span";
import { Title } from "../../../../common/Typography/Title";

export const Container = styled.section`
  height: 100%;
  background-image: url(${assetPaths.POLYGONS_BACKGROUND});
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: top;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 60px;
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const ChartAndMarketCapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ChartImage = styled.img`
  height: 475px;
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const ChartCardContainer = styled.div`
  width: 100%;
  max-width: 218px;
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SingleCardContainer = styled.div`
  width: 30%;
  margin-bottom: 20px;
`;

export const DisclaimerContainer = styled.div``;

export const StyledSpan = styled(Span)`
  font-size: 16px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[200]};
`;
