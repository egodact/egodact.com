import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';

const ChallengeMonitor = () => (
  <PushToTop>
    <Helmet>
      <title>Agora ChallengeMonitor</title>
    </Helmet>
    <Container>
      <h1>Hello, world</h1>
    </Container>
  </PushToTop>
);

export default ChallengeMonitor;
