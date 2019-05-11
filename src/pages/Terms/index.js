import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const Terms = ({ intl }) => (
  <PushToTop>
    <Helmet>
      <title>{intl.formatMessage({ id: 'pages.terms.page_title' })}</title>
    </Helmet>
    <Container>
      <h1>
        <FormattedMessage id="pages.terms.title" />
      </h1>
      <p>
        <FormattedMessage id="pages.terms.text" />
      </p>
      <h4>Agora ChallengeMonitor</h4>
      <ul>
        <li>
          <a href="/_terms/docs/sla-agora-challengemonitor.pdf" target="_blank">
            Service level agreement Agora ChallengeMonitor
          </a>
        </li>
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
          <a href="/_terms/docs/sla-agora-voortgangsmonitor.pdf" target="_blank">
            Service level agreement Agora VoortgangsMonitor
          </a>
        </li>
        <li>
          <a href="/_terms/docs/algemene-voorwaarden-agora-voortgangsmonitor.pdf" target="_blank">
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

Terms.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Terms);
