import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../components/Container';

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>Pagina niet gevonden</title>
    </Helmet>
    <Container>
      <h1>Pagina niet gevonden</h1>
    </Container>
  </Fragment>
);

export default NotFound;
