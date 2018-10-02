import React, { Fragment } from 'react';
import Container from '../Container';
import styled from 'react-emotion';
import Col from './Col';
import Link from 'react-router-dom/Link';

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
        Broncode is te vinden op <a href="https://github.com/egodact/egodact.com" target="_blank">GitHub</a>
      </Col>
      <Col title="Pagina's">
        <PageLink to="/">
          Home
        </PageLink>
        <PageLink to="/about">
          Over
        </PageLink>
        <PageLink to="/contact">
          Contact
        </PageLink>
        <PageLink to="/privacy">
          Privacy
        </PageLink>
        <PageLink to="/bugs">
          Bugs
        </PageLink>
        <PageLink to="/open-source">
          Open Source
        </PageLink>
        <PageLink to="/terms">
          Voorwaarden
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
