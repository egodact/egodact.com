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

const Bugs = ({ intl }) => (
  <PushToTop>
    <Helmet>
      <title>{intl.formatMessage({ id: 'pages.bugs.page_title' })}</title>
    </Helmet>
    <Container>
      <h1>
        <FormattedMessage id="pages.bugs.title" />
      </h1>
      <p>
        <FormattedHTMLMessage id="pages.bugs.text" />
      </p>
    </Container>
  </PushToTop>
);

Bugs.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Bugs);
