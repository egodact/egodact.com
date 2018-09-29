import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';

const Privacy = () => (
  <PushToTop>
    <Helmet>
      <title>Privacy</title>
    </Helmet>
    <Container>
      <h1>Privacy</h1>
      <h4>Agora ChallengeMonitor</h4>
      <ul>
        <li>
          <a href="/_privacy/docs/privacyverklaring-agora-challengemonitor.pdf" target="_blank">
            Privacyverklaring Agora ChallengeMonitor
          </a>
        </li>
        <li>
          <a href="/_privacy/docs/verwerkersovereenkomst-agora-challengemonitor.pdf" target="_blank">
            Verwerkersovereenkomst Agora ChallengeMonitor
          </a>
        </li>
        <li>
          <a href="/_privacy/docs/dpia-agora-challengemonitor.pdf" target="_blank">
            DPIA Agora ChallengeMonitor
          </a>
        </li>
      </ul>
      <h4>Agora VoortgangsMonitor</h4>
      <ul>
        <li>
          <a href="/_privacy/docs/privacyverklaring-agora-challengemonitor.pdf" target="_blank">
            Privacyverklaring Agora VoortgangsMonitor
          </a>
        </li>
        <li>
          <a href="/_privacy/docs/verwerkersovereenkomst-agora-voortgangsmonitor.pdf" target="_blank">
            Verwerkersovereenkomst Agora VoortgangsMonitor
          </a>
        </li>
        <li>
          <a href="/_privacy/docs/dpia-agora-voortgangsmonitor.pdf" target="_blank">
            DPIA Agora VoortgangsMonitor
          </a>
        </li>
      </ul>
    </Container>
  </PushToTop>
);

export default Privacy;
