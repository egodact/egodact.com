import React, { Fragment } from 'react';
import Container from '../Container';
import styled from 'react-emotion';
import Col from './Col';
import { Link } from 'react-router-dom';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const StyledFooter = styled('footer')({
  paddingTop: 24,
  paddingBottom: 24,
  backgroundColor: '#F5F5F5',
  borderTop: '1px solid #E0E0E0'
});

const PageLink = styled(Link)({
  float: 'left',
  clear: 'both'
});

const Footer = () => (
  <StyledFooter>
    <Container flex>
      <Col title={<span>&copy; {new Date().getFullYear()} Egodact</span>}>
        <FormattedHTMLMessage id="footer.copyright.open_source" />
      </Col>
      <Col title={<FormattedMessage id="footer.pages.title" />}>
        <PageLink to="/">
          <FormattedMessage id="footer.pages.navigation.home" />
        </PageLink>
        <PageLink to="/about">
          <FormattedMessage id="footer.pages.navigation.about" />
        </PageLink>
        <PageLink to="/contact">
          <FormattedMessage id="footer.pages.navigation.contact" />
        </PageLink>
        <PageLink to="/privacy">
          <FormattedMessage id="footer.pages.navigation.privacy" />
        </PageLink>
        <PageLink to="/bugs">
          <FormattedMessage id="footer.pages.navigation.bugs" />
        </PageLink>
        <PageLink to="/open-source">
          <FormattedMessage id="footer.pages.navigation.open_source" />
        </PageLink>
        <PageLink to="/terms">
          <FormattedMessage id="footer.pages.navigation.terms" />
        </PageLink>
      </Col>
      <Col title={<FormattedMessage id="footer.contact.title" />}>
        <FormattedHTMLMessage id="footer.contact.text" />
      </Col>
    </Container>
  </StyledFooter>
);

export default Footer;
