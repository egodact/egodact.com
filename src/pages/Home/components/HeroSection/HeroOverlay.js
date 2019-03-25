import styled from 'react-emotion';
import { logoBlue } from '../../../../colors';

const HeroOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: logoBlue,
  opacity: .8
});

export default HeroOverlay;
