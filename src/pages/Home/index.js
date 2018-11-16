import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'react-emotion';
import Container from '../../components/Container';
import PushToTop from '../../components/PushToTop';
import { grey } from '../../colors';

const InfoText = styled('p')({
  marginBottom: 0,
  maxWidth: 600,
  color: grey
});

const Home = () => (
  <PushToTop>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Container>
      <h1>Egodact ontwikkelt innovatieve onderwijssoftware.</h1>
      <InfoText>
        Egodact ontwikkelt software die aansluit bij het opkomende changemakers-onderwijs, in samenwerking met Agora Roermond.
      </InfoText>
    </Container>
  </PushToTop>
);

export default Home;
