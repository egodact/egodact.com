import React from 'react';
import styled from 'react-emotion';
import HeaderContentWrapper from './HeaderContentWrapper';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import Navigation from './Navigation';

const StyledHeader = styled('header')({
  paddingTop: 12,
  paddingBottom: 12,
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
    <HeaderContentWrapper flex>
      <SiteLink to="/">
        <Logo src={logo} alt="Logo" />
      </SiteLink>
      <Navigation />
    </HeaderContentWrapper>
  </StyledHeader>
);

export default Header;
