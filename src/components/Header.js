import React from 'react';
import Container from './Container';
import Link from 'react-router-dom/Link';

const Header = () => (
  <header>
    <Container>
      <h3><Link to="/">Egodact</Link></h3>
    </Container>
  </header>
);

export default Header;
