import styled from 'react-emotion';
import { mediaQuery } from '../../../../../../styles';

const ArrowButtonLabel = styled('h4')({
  marginBottom: 0,
  maxWidth: 300,
  lineHeight: 1.5,
  fontSize: 24,
  fontWeight: 500,
  [mediaQuery(1024)]: {
    display: 'none'
  }
});

export default ArrowButtonLabel;
