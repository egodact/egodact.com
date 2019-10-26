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
      <ul>
        <li>
          <a href="/_terms/docs/sla-egodact-software.pdf" target="_blank">
            Service level agreement Egodact software
          </a>
        </li>
        <li>
          <a href="/_terms/docs/algemene-voorwaarden-egodact-software.pdf" target="_blank">
            Algemene voorwaarden Egodact software
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
