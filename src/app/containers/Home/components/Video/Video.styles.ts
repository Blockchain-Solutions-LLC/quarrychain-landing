import styled from "styled-components";
import media from "styled-media-query";
import { assetPaths } from "../../../../common/constants";

export const Container = styled.section`
  height: 100%;
  background-image: url(${assetPaths.TURQUOISE_BACKGROUND});
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: top;
  background-repeat: no-repeat;

  ${media.lessThan("large")`
   display: none;
  `}
`;
