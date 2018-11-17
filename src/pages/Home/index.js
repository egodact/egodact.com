import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import HeroWrapper from './components/HeroWrapper';
import StyledLogo from './components/StyledLogo';
import InfoText from './components/InfoText';
import logoSquare from './logo-square.svg';

const Home = () => (
  <PushToTop>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Container>
      <HeroWrapper>
        <StyledLogo src={logoSquare} alt="Logo" />
        <div>
          <h1>Egodact ontwikkelt innovatieve onderwijssoftware.</h1>
          <InfoText>
            Egodact ontwikkelt software die aansluit bij het opkomende changemakers-onderwijs, in samenwerking met Agora Roermond.
          </InfoText>
        </div>
      </HeroWrapper>
    </Container>
  </PushToTop>
);

export default Home;
