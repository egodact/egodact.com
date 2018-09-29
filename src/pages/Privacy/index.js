import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => (
  <Fragment>
    <Helmet>
      <title>Privacy</title>
    </Helmet>
    <h1>Privacy</h1>
    <h4>Agora ChallengeMonitor</h4>
    <ul>
      <li>
        <a href="./docs/privacyverklaring-agora-challengemonitor.pdf" target="_blank">
          Privacyverklaring Agora ChallengeMonitor
        </a>
      </li>
      <li>
        <a href="./docs/verwerkersovereenkomst-agora-challengemonitor.pdf" target="_blank">
          Verwerkersovereenkomst Agora ChallengeMonitor
        </a>
      </li>
      <li>
        <a href="./docs/dpia-agora-challengemonitor.pdf" target="_blank">
          DPIA Agora ChallengeMonitor
        </a>
      </li>
    </ul>
    <h4>Agora VoortgangsMonitor</h4>
    <ul>
      <li>
        <a href="./docs/privacyverklaring-agora-challengemonitor.pdf" target="_blank">
          Privacyverklaring Agora VoortgangsMonitor
        </a>
      </li>
      <li>
        <a href="./docs/verwerkersovereenkomst-agora-voortgangsmonitor.pdf" target="_blank">
          Verwerkersovereenkomst Agora VoortgangsMonitor
        </a>
      </li>
      <li>
        <a href="./docs/dpia-agora-voortgangsmonitor.pdf" target="_blank">
          DPIA Agora VoortgangsMonitor
        </a>
      </li>
    </ul>
  </Fragment>
);

export default Privacy;
