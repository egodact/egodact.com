import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import {
  injectIntl,
  intlShape,
  FormattedMessage,
  FormattedHTMLMessage
} from 'react-intl';

const Privacy = ({ intl }) => (
  <PushToTop>
    <Helmet>
      <title>{intl.formatMessage({ id: 'pages.privacy.page_title' })}</title>
    </Helmet>
    <Container>
      <h1>
        <FormattedMessage id="pages.privacy.title" />
      </h1>
      <p>
        <FormattedMessage id="pages.privacy.text" />
      </p>
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
          <a href="/_privacy/docs/privacyverklaring-agora-voortgangsmonitor.pdf" target="_blank">
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
      <br />
      <p>
        <FormattedHTMLMessage id="pages.privacy.privacy_convenant_text" />
      </p>
    </Container>
  </PushToTop>
);

Privacy.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Privacy);
