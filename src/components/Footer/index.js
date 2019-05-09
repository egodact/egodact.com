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
      <Col title="Contact">
        Egodact vof,
        <br />
        Pierre Cuypersstraat 34,
        <br/>
        6041XH Roermond
        <br />
        <a href="mailto:contact@egodact.com">contact@egodact.com</a>
        <br />
        +31 6 27341748
        <br />
        <br />
        KvK: 72607467
        <br />
        BTW-nummer: 859171838B01
      </Col>
    </Container>
  </StyledFooter>
);

export default Footer;
