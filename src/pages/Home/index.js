import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Section from './components/Section';
import Container from '../../components/Container';
import HeroSection from './components/HeroSection';
import HeroOverlay from './components/HeroSection/HeroOverlay';
import HeroTitle from './components/HeroSection/HeroTitle';
import PlatformImage from './components/PlatformImage';
import PlatformLink from './components/PlatformLink';
import challengeMonitorPlatformImage from './components/platformImages/challengemonitor.png';
import progressMonitorPlatformImage from './components/platformImages/progressmonitor.png';
import Surtitle from './components/Surtitle';
import PostsSection from './components/PostsSection';
import LinkButton from '../../components/LinkButton';
import { mediaQuery } from '../../styles';
import {
  FormattedMessage,
  FormattedHTMLMessage,
  injectIntl,
  intlShape
} from 'react-intl';

const Home = ({ intl }) => (
  <PushToTop>
    <Helmet>
      <title>{intl.formatMessage({ id: 'pages.home.page_title' })}</title>
    </Helmet>
    <HeroSection>
      <HeroOverlay />
      <Container>
        <HeroTitle>
          <FormattedMessage id="pages.home.sections.hero.title" />
        </HeroTitle>
      </Container>
    </HeroSection>
    <Section>
      <Container>
        <Section.Title>
          <FormattedHTMLMessage id="pages.home.sections.intro.title" />
        </Section.Title>
        <Section.Text>
          <FormattedHTMLMessage id="pages.home.sections.intro.text" />
        </Section.Text>
      </Container>
    </Section>
    <Section split>
      <Section.Half>
        <PlatformImage src={progressMonitorPlatformImage} />
      </Section.Half>
      <Section.Half>
        <Section.Half.ContentWrapper>
          <Section.Title>
            <FormattedMessage id="pages.home.sections.progressmonitor.title" />
          </Section.Title>
          <Section.Text>
            <FormattedHTMLMessage id="pages.home.sections.progressmonitor.text" />
            <PlatformLink to="/progressmonitor">
              <FormattedMessage id="pages.home.sections.progressmonitor.platform_link" />
            </PlatformLink>
          </Section.Text>
        </Section.Half.ContentWrapper>
      </Section.Half>
    </Section>
    <Section split>
      <Section.Half css={{ [mediaQuery(1024)]: { order: 1 } }}>
        <Section.Half.ContentWrapper>
          <Section.Title>
            <FormattedMessage id="pages.home.sections.challengemonitor.title" />
          </Section.Title>
          <Section.Text>
            <FormattedHTMLMessage id="pages.home.sections.challengemonitor.text" />
            <PlatformLink to="/challengemonitor">
              <FormattedMessage id="pages.home.sections.challengemonitor.platform_link" />
            </PlatformLink>
          </Section.Text>
        </Section.Half.ContentWrapper>
      </Section.Half>
      <Section.Half>
        <PlatformImage src={challengeMonitorPlatformImage} />
      </Section.Half>
    </Section>
    <Section css={{ [mediaQuery(1024)]: { backgroundColor: '#F5F5F5' } }}>
      <Container>
        <Surtitle>
          <FormattedMessage id="pages.home.sections.agora.surtitle" />
        </Surtitle>
        <Section.Title>
          <FormattedMessage id="pages.home.sections.agora.title" />
        </Section.Title>
        <Section.Text>
          <FormattedHTMLMessage id="pages.home.sections.agora.text" />
        </Section.Text>
      </Container>
    </Section>
    <PostsSection />
    <Section style={{ marginBottom: -36 }}>
      <Container>
        <Section.Title>
          <FormattedMessage id="pages.home.sections.contact.title" />
        </Section.Title>
        <Section.Text>
          <FormattedMessage id="pages.home.sections.contact.text" />
        </Section.Text>
        <LinkButton to="/contact">
          <FormattedMessage id="pages.home.sections.contact.contact_button" />
        </LinkButton>
      </Container>
    </Section>
  </PushToTop>
);

Home.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Home);
