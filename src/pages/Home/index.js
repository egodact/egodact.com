import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'react-router-dom/Link';
import Container from '../../components/Container';

const marginFix = {
  marginBottom: 0
};

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Container withPadding>
      <h1>Egodact ontwikkelt innovatieve onderwijssoftware.</h1>
      <p style={marginFix}>
        Niet homepages. De Egodact website zal dus nog heel even moeten wachten.
      </p>
    </Container>
  </Fragment>
);

export default Home;
