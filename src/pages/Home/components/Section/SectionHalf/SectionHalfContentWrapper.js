import styled from 'react-emotion';
import { mediaQuery } from '../../../../../styles';

const SectionHalfContentWrapper = styled('div')({
  paddingTop: 84,
  paddingBottom: 84,
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 512,
  maxWidth: 'calc(100% - 48px)',
  boxSizing: 'border-box',
  [mediaQuery(1024)]: {
    paddingTop: 24,
    paddingBottom: 24
  }
});

export default SectionHalfContentWrapper;
