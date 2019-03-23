import React from 'react';
import styled from 'react-emotion';
import Container from '../Container';
import Link from 'react-router-dom/Link';
import logo from './logo.svg';
import Navigation from './Navigation';

const StyledHeader = styled('header')({
  paddingTop: 8,
  paddingBottom: 8,
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

const containerStyle = {
  alignItems: 'center',
  lineHeight: 0
};

const Header = () => (
  <StyledHeader>
    <Container style={containerStyle} flex>
      <SiteLink to="/">
        <Logo src={logo} alt="Logo" />
      </SiteLink>
      <Navigation />
    </Container>
  </StyledHeader>
);

export default Header;
