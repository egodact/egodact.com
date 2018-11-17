import styled from 'react-emotion';
import { mediaQuery } from '../../../styles';

const StyledLogo = styled('img')({
  marginRight: 48,
  height: 112,
  [mediaQuery(768)]: {
    display: 'none'
  }
});

export default StyledLogo;
