import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import ContactTiles from './components/ContactTiles';

const Contact = () => (
  <PushToTop>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <Container>
      <h1>Neem contact op met Egodact</h1>
      <ContactTiles />
    </Container>
  </PushToTop>
);

export default Contact;
