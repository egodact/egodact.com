import styled from 'react-emotion';
import Section from '../Section';
import { white } from '../../../../colors';
import heroImage from './heroImage.jpg';

const HeroSection = styled(Section)({
  position: 'relative',
  marginTop: -36,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 142,
  paddingBottom: 142,
  width: 'calc(100% - 320px)',
  maxWidth: 'calc(100% - 96px)',
  color: white,
  backgroundPositionY: -90,
  backgroundSize: 'cover',
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: 'no-repeat'
});

export default HeroSection;
