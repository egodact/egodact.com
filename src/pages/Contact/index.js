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
      Zie footer.
    </Container>
  </PushToTop>
);

export default Contact;
