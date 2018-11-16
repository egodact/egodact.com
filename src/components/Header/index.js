import React from 'react';
import styled from 'react-emotion';
import Container from '../Container';
import Link from 'react-router-dom/Link';
import logo from './logo.svg';

const StyledHeader = styled('header')({
  paddingTop: 18,
  paddingBottom: 18,
  borderBottom: '2px solid #F5F5F5'
});

const SiteLink = styled(Link)({
  fontWeight: 700,
  lineHeight: 0,
  display: 'inline-block'
});

const Logo = styled('img')({
  height: 45
});

const Header = () => (
  <StyledHeader>
    <Container style={{ lineHeight: 0 }}>
      <SiteLink to="/">
        <Logo src={logo} alt="Logo" />
      </SiteLink>
    </Container>
  </StyledHeader>
);

export default Header;
