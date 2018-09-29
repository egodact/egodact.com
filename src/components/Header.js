import React from 'react';
import styled from 'react-emotion';
import Container from './Container';
import Link from 'react-router-dom/Link';

const StyledHeader = styled('header')({
  paddingTop: 18,
  paddingBottom: 18,
  borderBottom: '2px solid #F5F5F5'
});

const SiteTitle = styled('h3')({
  margin: 0
});

const SiteLink = styled(Link)({
  fontWeight: 700
});

const Header = () => (
  <StyledHeader>
    <Container>
      <SiteTitle>
        <SiteLink to="/">
          Egodact
        </SiteLink>
      </SiteTitle>
    </Container>
  </StyledHeader>
);

export default Header;
