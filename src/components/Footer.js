import React, { Fragment } from 'react';
import Container from './Container';
import styled from 'react-emotion';

const FooterWrapper = styled('footer')({
  paddingTop: 24,
  paddingBottom: 24,
  backgroundColor: '#F5F5F5'
});

const Footer = () => (
  <FooterWrapper>
    <Container>
      <h2>Contact opnemen?</h2>
      <p>
        Egodact vof,
        <br />
        Pierre Cuypersstraat 34,
        <br/>
        6041XH Roermond
        <br />
        <em>(Adres is geen bezoekadres. Afspraak op locatie maken kan via onderstaande e-mailadres)</em>
        <br />
        <a href="mailto:contact@egodact.com">contact@egodact.com</a>
        <br />
        +31 6 27341748
        <br />
        <br />
        KvK: 72607467
        <br />
        <br />
        BTW-nummer: 859171838B01
      </p>
    </Container>
  </FooterWrapper>
);

export default Footer;
