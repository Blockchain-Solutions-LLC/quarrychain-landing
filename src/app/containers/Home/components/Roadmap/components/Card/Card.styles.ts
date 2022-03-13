import styled from 'styled-components';
import media from 'styled-media-query';
import { Span } from '../../../../../../common/Typography/Span';
import { Title } from '../../../../../../common/Typography/Title';

export const Container = styled.div`
  position: relative;
  max-width: 323px;
  background: ${({ theme: { colors: { neutral } } }) => neutral[0]};
  box-shadow: 4px 8px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 24px 32px;
`;

export const StyledTitle = styled(Title)`
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 8px;

  ${media.lessThan("large")`
    font-size: 22px;
    text-align: center;
  `}


  ${media.lessThan("medium")`
    line-height: 22px;
    margin-bottom: 20px;
  `}
`;

export const ListContainer = styled.ul`
  padding: 0px 10px;
`;

export const ListItem = styled.li``;

export const ItemText = styled(Span)`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme: { colors: { secondary } } }) => secondary[0]};

  ${media.lessThan("medium")`
    font-size: 16px;
    text-align: center;
  `}
`