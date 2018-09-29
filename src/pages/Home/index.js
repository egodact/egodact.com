import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'react-router-dom/Link';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>Egodact</h1>
    <p>De Egodact website komt er spoedig aan. Hieronder nuttige links:</p>
    <ul>
      <li>
        <Link to="./terms">Voorwaarden</Link>
      </li>
      <li>
        <Link to="./privacy">Privacy</Link>
      </li>
      <li>
        <Link to="./bugs">Bugs melden</Link>
      </li>
      <li>
        <Link to="./open-source">Open Source</Link>
      </li>
    </ul>
  </Fragment>
);

export default Home;
