import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';

const OpenSource = () => (
  <PushToTop>
    <Helmet>
      <title>Open Source</title>
    </Helmet>
    <Container>
      <h1>Open Source</h1>
      <p>
        De Agora VoortgangsMonitor en de Agora ChallengeMonitor maken veel gebruik van open source projecten. De licenties van deze projecten zijn te vinden in de volgende zip bestanden:
        <br />
        <a href="/_open-source/licenses/challengemonitor-licenses.zip">ChallengeMonitor licenties</a>
        <br />
        <a href="/_open-source/licenses/progressmonitor-licenses.zip">VoortgangsMonitor licenties</a>
        <br />
        <br />
        Egodact heeft zelf ook enkele open source projecten gepubliceerd. Deze projecten zijn te vinden op <a href="https://github.com/egodact" target="_blank">GitHub</a>.
      </p>
    </Container>
  </PushToTop>
);

export default OpenSource;
