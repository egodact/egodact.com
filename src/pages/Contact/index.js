import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';

const Contact = () => (
  <PushToTop>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <Container>
      <h1>Neem contact op met Egodact</h1>
      <p>
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
      </p>
    </Container>
  </PushToTop>
);

export default Contact;
