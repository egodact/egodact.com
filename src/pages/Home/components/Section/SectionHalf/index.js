import styled from 'react-emotion';
import SectionHalfContentWrapper from './SectionHalfContentWrapper';

const SectionHalf = styled('aside')({
  width: '50%',
  display: 'inline-block'
});

SectionHalf.ContentWrapper = SectionHalfContentWrapper;

export default SectionHalf;
