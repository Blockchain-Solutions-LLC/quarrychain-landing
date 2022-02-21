import styled from "styled-components";
import media from "styled-media-query";

export const NavigationListContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;

  ${media.between("medium", "large")`
    padding: 0 30px;
    width: 65%;
    justify-content: space-between;
  `};
`;
