import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';

const Terms = () => (
  <PushToTop>
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
  </PushToTop>
);

export default Terms;
