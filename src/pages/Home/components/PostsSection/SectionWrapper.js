import styled from 'react-emotion';
import { mediaQuery } from '../../../../styles';

const SectionWrapper = styled('div')({
  position: 'relative',
  marginTop: 64,
  marginBottom: 64,
  [mediaQuery(1024)]: {
    marginTop: 50,
    marginBottom: 50
  }
});

export default SectionWrapper;
