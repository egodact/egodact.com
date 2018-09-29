import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../components/Container';

const Terms = () => (
  <Fragment>
    <Helmet>
      <title>Voorwaarden</title>
    </Helmet>
    <Container>
      <h1>Voorwaarden</h1>
      <h4>Agora ChallengeMonitor</h4>
      <ul>
        <li>
          <a href="/_terms/docs/algemene-voorwaarden-agora-challengemonitor.pdf" target="_blank">
            Algemene voorwaarden Agora ChallengeMonitor
          </a>
        </li>
        <li>
          <a href="/_terms/docs/gebruiksvoorwaarden-agora-challengemonitor.pdf" target="_blank">
            Gebruiksvoorwaarden Agora ChallengeMonitor
          </a>
        </li>
      </ul>
      <h4>Agora VoortgangsMonitor</h4>
      <ul>
        <li>
          <a href="/_terms/docs/algemene-voorwaarden-agora-challengemonitor.pdf" target="_blank">
            Algemene voorwaarden Agora VoortgangsMonitor
          </a>
        </li>
        <li>
          <a href="/_terms/docs/gebruiksvoorwaarden-agora-voortgangsmonitor.pdf" target="_blank">
            Gebruiksvoorwaarden Agora VoortgangsMonitor
          </a>
        </li>
      </ul>
    </Container>
  </Fragment>
);

export default Terms;
