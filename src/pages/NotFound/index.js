import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Container from '../../components/Container';
import LinkButton from '../../components/LinkButton';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const NotFound = ({ intl }) => (
  <Fragment>
    <Helmet>
      <title>{intl.formatMessage({ id: 'pages.not_found.page_title' })}</title>
    </Helmet>
    <Container withPadding>
      <h1>
        <FormattedMessage id="pages.not_found.title" />
      </h1>
      <p>
        <FormattedMessage id="pages.not_found.text" />
      </p>
      <LinkButton to="/">
        <FormattedMessage id="pages.not_found.homepage_button" />
      </LinkButton>
    </Container>
  </Fragment>
);

NotFound.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(NotFound);
