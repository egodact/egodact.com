import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../components/Container';
import LinkButton from '../../components/LinkButton';

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>Pagina niet gevonden</title>
    </Helmet>
    <Container>
      <h1>Oh nee. Oh-oh.</h1>
      <p>
        Die pagina konden we helaas niet vinden. Sorry.
        <br />
        <br />
        <LinkButton to="/">
          Naar de homepagina
        </LinkButton>
      </p>
    </Container>
  </Fragment>
);

export default NotFound;
