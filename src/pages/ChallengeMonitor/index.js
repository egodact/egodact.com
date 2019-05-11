import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import Image from '../../components/Image';
import { Link } from 'react-router-dom';
import LinkButton from '../../components/LinkButton';
import exampleRow from './images/example-row.png';
import exampleChallenge from './images/example-challenge.png';
import modelEditor from './images/model-editor.png';
import {
  injectIntl,
  intlShape,
  FormattedMessage,
  FormattedHTMLMessage
} from 'react-intl';

const ChallengeMonitor = ({ intl }) => (
  <PushToTop>
    <Helmet>
      <title>
        {intl.formatMessage({ id: 'pages.challengemonitor.page_title' })}
      </title>
    </Helmet>
    <Container>
      <h1>
        <FormattedMessage id="pages.challengemonitor.title" />
      </h1>
      <p>
        <FormattedMessage id="pages.challengemonitor.text" />
      </p>
      <h3>
        <FormattedMessage id="pages.challengemonitor.sections.intro.title" />
      </h3>
      <p>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.intro.content.0" />
      </p>
      <p>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.intro.content.1" />
      </p>
      <Image
        src={exampleRow}
        alt={intl.formatMessage({
          id: 'pages.challengemonitor.sections.intro.content.2'
        })}
      />
      <p>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.intro.content.3" />
      </p>
      <Image
        src={exampleChallenge}
        alt={intl.formatMessage({
          id: 'pages.challengemonitor.sections.intro.content.4'
        })}
      />
      <p>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.intro.content.5" />
      </p>
      <p>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.intro.content.6" />
      </p>
      <Image
        src={modelEditor}
        alt={intl.formatMessage({
          id: 'pages.challengemonitor.sections.intro.content.7'
        })}
      />
      <p>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.intro.content.8" />
        <Link to="/contact">
          <FormattedHTMLMessage id="pages.challengemonitor.sections.intro.content.9" />
        </Link>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.intro.content.10" />
      </p>
      <h3>
        <FormattedMessage id="pages.challengemonitor.sections.combine.title" />
      </h3>
      <p>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.combine.content.0" />
      </p>
      <p>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.combine.content.1" />
      </p>
      <LinkButton to="./progressmonitor" style={{ marginBottom: 18 }}>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.combine.content.2" />
      </LinkButton>
      <h3>
        <FormattedMessage id="pages.challengemonitor.sections.contact.title" />
      </h3>
      <p>
        <FormattedHTMLMessage id="pages.challengemonitor.sections.contact.content.0" />
      </p>
      <LinkButton to="/contact">
        <FormattedHTMLMessage id="pages.challengemonitor.sections.contact.content.1" />
      </LinkButton>
    </Container>
  </PushToTop>
);

ChallengeMonitor.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(ChallengeMonitor);
