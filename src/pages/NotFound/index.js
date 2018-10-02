import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../components/Container';
import LinkButton from '../../components/LinkButton';

const paddingFix = {
  paddingTop: 36,
  paddingBottom: 36
};

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>Pagina niet gevonden</title>
    </Helmet>
    <Container style={paddingFix}>
      <h1>Oh nee. Oh-oh.</h1>
      <p>
        Die pagina konden we helaas niet vinden. Sorry.
      </p>
      <LinkButton to="/">
        Naar de homepagina
      </LinkButton>
    </Container>
  </Fragment>
);

export default NotFound;
