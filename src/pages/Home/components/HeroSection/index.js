import styled from 'react-emotion';
import Section from '../Section';
import { white } from '../../../../colors';
import heroImage from './heroImage.jpg';
import { mediaQuery } from '../../../../styles';

const HeroSection = styled(Section)({
  position: 'relative',
  marginTop: -36,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 'calc(100vw / 10)',
  paddingBottom: 'calc(100vw / 10)',
  width: 'calc(100% - 320px)',
  color: white,
  backgroundPositionY: -90,
  backgroundSize: 'cover',
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: 'no-repeat',
  '@media screen and (min-width: 2000px)': {
    paddingTop: 200,
    paddingBottom: 200
  },
  [mediaQuery(1200)]: {
    width: 836
  },
  [mediaQuery(1024)]: {
    paddingTop: 56,
    paddingBottom: 56,
    width: 'calc(100% - 48px)'
  },
  [mediaQuery(768)]: {
    backgroundPositionY: 'top'
  }
});

export default HeroSection;
