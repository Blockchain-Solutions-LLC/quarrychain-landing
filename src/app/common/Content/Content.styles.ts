import styled from "styled-components";
import { Paragraph } from "../Typography/Paragraph";
import { Title } from "../Typography/Title";
import { assetPaths } from "../constants";

export const Container = styled.section`
  width: 100%;
  min-height: 70vh;
  padding-top: 80px;
  background: url(${assetPaths.POLYGONS_BACKGROUND_2});
  background-position: center;
  background-repeat: no-repeat;
`;

export const PageTitleContainer = styled.div`
  width: 100%;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary[0]};
`;

export const TitleWrapper = styled.div`
  width: 70%;
`;

export const PageTitle = styled(Title)`
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[0]};
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 70%;
  padding: 32px 0px;
`;

export const ContentTitle = styled(Title)`
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 8px;
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary[100]};
`;

export const ContentParagraph = styled(Paragraph)`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 20px;
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[300]};
`;
