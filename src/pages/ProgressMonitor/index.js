import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import Image from '../../components/Image';
import { Link } from 'react-router-dom';
import LinkButton from '../../components/LinkButton';
import portfolioScreenshot from './images/portfolio-screenshot.png';
import rubricLevels from './images/rubric-levels.png';
import historyBar from './images/history-bar.png';
import {
  injectIntl,
  intlShape,
  FormattedMessage,
  FormattedHTMLMessage
} from 'react-intl';

const ProgressMonitor = ({ intl }) => (
  <PushToTop>
    <Helmet>
      <title>
        {intl.formatMessage({ id: 'pages.progressmonitor.page_title' })}
      </title>
    </Helmet>
    <Container>
      <h1>
        <FormattedMessage id="pages.progressmonitor.title" />
      </h1>
      <p>
        <FormattedMessage id="pages.progressmonitor.text" />
      </p>
      <h3>
        <FormattedMessage id="pages.progressmonitor.sections.intro.title" />
      </h3>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.intro.content.0" />
      </p>
      <Image
        src={portfolioScreenshot}
        alt={intl.formatMessage({
          id: 'pages.progressmonitor.sections.intro.content.1'
        })}
      />
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.intro.content.2" />
      </p>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.intro.content.3" />
      </p>
      <Image
        src={rubricLevels}
        alt={intl.formatMessage({
          id: 'pages.progressmonitor.sections.intro.content.4'
        })}
      />
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.intro.content.5" />
        <Link to="./challengemonitor">
          <FormattedHTMLMessage id="pages.progressmonitor.sections.intro.content.6" />
        </Link>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.intro.content.7" />
      </p>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.intro.content.8" />
      </p>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.intro.content.9" />
      </p>
      <Image
        src={historyBar}
        alt={intl.formatMessage({
          id: 'pages.progressmonitor.sections.intro.content.10'
        })}
      />
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.intro.content.11" />
      </p>
      <h3>
        <FormattedMessage id="pages.progressmonitor.sections.motivation.title" />
      </h3>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.motivation.content.0" />
      </p>
      <h4>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.motivation.content.1" />
      </h4>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.motivation.content.2" />
      </p>
      <h4>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.motivation.content.3" />
      </h4>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.motivation.content.4" />
      </p>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.motivation.content.5" />
      </p>
      <h4>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.motivation.content.6" />
      </h4>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.motivation.content.7" />
      </p>
      <h3>
        <FormattedMessage id="pages.progressmonitor.sections.coaching.title" />
      </h3>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.coaching.content.0" />
      </p>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.coaching.content.1" />
      </p>
      <h3>
        <FormattedMessage id="pages.progressmonitor.sections.combine.title" />
      </h3>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.combine.content.0" />
      </p>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.combine.content.1" />
      </p>
      <LinkButton to="./challengemonitor" style={{ marginBottom: 18 }}>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.combine.content.2" />
      </LinkButton>
      <h3>
        <FormattedMessage id="pages.progressmonitor.sections.contact.title" />
      </h3>
      <p>
        <FormattedHTMLMessage id="pages.progressmonitor.sections.contact.content.0" />
      </p>
      <LinkButton to="/contact">
        <FormattedHTMLMessage id="pages.progressmonitor.sections.contact.content.1" />
      </LinkButton>
    </Container>
  </PushToTop>
);

ProgressMonitor.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(ProgressMonitor);
