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
import getLanguage from '../../getLanguage';

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
      {getLanguage() === 'nl' ? (
        <ul>
          <li>
            <a href="/_privacy/docs/privacyverklaring-egodact-software.pdf" target="_blank">
              Privacyverklaring Egodact software
            </a>
          </li>
          <li>
            <a href="/_privacy/docs/verwerkersovereenkomst-egodact-software.pdf" target="_blank">
              Verwerkersovereenkomst Egodact software
            </a>
          </li>
          <li>
            <a href="/_privacy/docs/dpia-egodact-software-dutch.pdf" target="_blank">
              DPIA Egodact software
            </a>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <a href="/_privacy/docs/privacy-statement-egodact-software.pdf" target="_blank">
              Privacy statement Egodact software
            </a>
          </li>
          <li>
            <a href="/_privacy/docs/data-processing-agreement-egodact-software.pdf" target="_blank">
              Data processing agreement Egodact software
            </a>
          </li>
          <li>
            <a href="/_privacy/docs/dpia-egodact-software.pdf" target="_blank">
              DPIA Egodact software
            </a>
          </li>
        </ul>
      )}
      <br />
      <p>
        <FormattedHTMLMessage id="pages.privacy.privacy_convenant_text" />
      </p>
      <h4>
        <FormattedMessage id="pages.privacy.analytics.title" />
      </h4>
      <p>
        <FormattedHTMLMessage id="pages.privacy.analytics.text" />
      </p>
    </Container>
  </PushToTop>
);

Privacy.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Privacy);
