import React from 'react';
import styled from 'react-emotion';
import Container from '../Container';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import Navigation from './Navigation';
import useReactRouter from 'use-react-router';
import { mediaQuery } from '../../styles';

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

const StyledContainer = styled(Container)({
  alignItems: 'center',
  lineHeight: 0
}, ({ isHomePage }) => ({
  width: isHomePage ? 'calc(100% - 320px)' : null,
  [mediaQuery(1200)]: {
    width: isHomePage ? 836 : null
  },
  [mediaQuery(1024)]: {
    width: isHomePage ? 'calc(100% - 48px)' : null
  }
}));

const Header = () => {
  const { location } = useReactRouter();
  const isHomePage = location.pathname === '/';

  return (
    <StyledHeader>
      <StyledContainer isHomePage={isHomePage} flex>
        <SiteLink to="/">
          <Logo src={logo} alt="Logo" />
        </SiteLink>
        <Navigation />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
