import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import ContactTiles from './components/ContactTiles';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const Contact = ({ intl }) => (
  <PushToTop>
    <Helmet>
      <title>{intl.formatMessage({ id: 'pages.contact.page_title' })}</title>
    </Helmet>
    <Container>
      <h1>
        <FormattedMessage id="pages.contact.title" />
      </h1>
      <ContactTiles />
    </Container>
  </PushToTop>
);

Contact.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Contact);
