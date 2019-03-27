import styled from 'react-emotion';
import Section from '../Section';
import { mediaQuery } from '../../../../styles';

const HeroTitle = styled(Section.Title)({
  position: 'relative',
  fontSize: 36,
  fontWeight: 400,
  textAlign: 'center',
  zIndex: 1
});

export default HeroTitle;
