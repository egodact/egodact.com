import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Terms = () => (
  <Fragment>
    <Helmet>
      <title>Voorwaarden</title>
    </Helmet>
    <h1>Voorwaarden</h1>
    <h4>Agora ChallengeMonitor</h4>
    <ul>
      <li>
        <a href="./docs/algemene-voorwaarden-agora-challengemonitor.pdf" target="_blank">
          Algemene voorwaarden Agora ChallengeMonitor
        </a>
      </li>
      <li>
        <a href="./docs/gebruiksvoorwaarden-agora-challengemonitor.pdf" target="_blank">
          Gebruiksvoorwaarden Agora ChallengeMonitor
        </a>
      </li>
    </ul>
    <h4>Agora VoortgangsMonitor</h4>
    <ul>
      <li>
        <a href="./docs/algemene-voorwaarden-agora-challengemonitor.pdf" target="_blank">
          Algemene voorwaarden Agora VoortgangsMonitor
        </a>
      </li>
      <li>
        <a href="./docs/gebruiksvoorwaarden-agora-voortgangsmonitor.pdf" target="_blank">
          Gebruiksvoorwaarden Agora VoortgangsMonitor
        </a>
      </li>
    </ul>
  </Fragment>
);

export default Terms;
