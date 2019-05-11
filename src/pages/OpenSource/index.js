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

const OpenSource = ({ intl }) => (
  <PushToTop>
    <Helmet>
      <title>
        {intl.formatMessage({ id: 'pages.open_source.page_title' })}
      </title>
    </Helmet>
    <Container>
      <h1>
        <FormattedMessage id="pages.open_source.title" />
      </h1>
      <p>
        <FormattedHTMLMessage id="pages.open_source.text" />
      </p>
    </Container>
  </PushToTop>
);

OpenSource.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(OpenSource);
