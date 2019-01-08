import styled from 'react-emotion';
import { mediaQuery } from '../../../../styles';

const FounderWrapper = styled('section')({
  marginTop: 36,
  marginLeft: -24,
  marginRight: -24,
  display: 'flex',
  flexWrap: 'wrap',
  [mediaQuery(860)]: {
    marginLeft: 0,
    marginRight: 0
  }
});

export default FounderWrapper;
