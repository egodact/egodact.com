import styled from 'react-emotion';
import { mediaQuery } from '../../../../../../styles';

const ArrowButtonIcon = styled('img')({
  marginBottom: 16,
  width: 64,
  height: 64,
  [mediaQuery(1024)]: {
    marginBottom: 0,
    width: 48,
    height: 48
  }
});

export default ArrowButtonIcon;
