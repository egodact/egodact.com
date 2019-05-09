import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import Founders from './components/Founders';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const About = ({ intl }) => (
  <PushToTop>
    <Helmet>
      <title>{intl.formatMessage({ id: 'pages.about.page_title' })}</title>
    </Helmet>
    <Container>
      <h1>
        <FormattedMessage id="pages.about.title" />
      </h1>
      <p>
        <FormattedMessage id="pages.about.text" />
      </p>
      <Founders />
    </Container>
  </PushToTop>
);

About.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(About);
