import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  display: none;
  position: relative;
 
  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
  `}
`