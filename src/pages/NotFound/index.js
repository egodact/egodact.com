import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>Pagina niet gevonden</title>
    </Helmet>
    <h1>Pagina niet gevonden</h1>
  </Fragment>
);

export default NotFound;
