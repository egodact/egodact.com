import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import Founders from './components/Founders';

const About = () => (
  <PushToTop>
    <Helmet>
      <title>Over</title>
    </Helmet>
    <Container>
      <h1>Over Egodact</h1>
      <p>
        Egodact is in september 2018 opgericht door 3 gepassioneerde Agora leerlingen uit Roermond. Na 2 jaar in ontwikkeling te zijn geweest, wordt Egodact{`'`}s software, Agora ChallengeMonitor en Agora VoortgangsMonitor opengesteld voor gebruik door andere changemakers scholen.
      </p>
      <Founders />
    </Container>
  </PushToTop>
);

export default About;
