import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Bugs = () => (
  <Fragment>
    <Helmet>
      <title>Bugs</title>
    </Helmet>
    <h1>Bugs melden</h1>
    <p>
      Heb je een bug of typefout gevonden? Graag horen we van je zodat we hem kunnen oplossen.
      <br />
      <a href="mailto:bugs@egodact.com">Stuur een e-mail</a>
      <br />
      <br />
      Ook kun je een issue aanmaken op GitHub:
      <a href="https://github.com/egodact/egodact-issues" target="_blank">maak een issue aan op GitHub</a>
    </p>
  </Fragment>
);

export default Bugs;
