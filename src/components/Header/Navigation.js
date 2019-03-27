import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { mediaQuery } from '../../styles';

const StyledNavigation = styled('nav')({
  marginLeft: 'auto'
});

const StyledLink = styled(Link)({
  marginRight: 36,
  ':last-child': {
    marginRight: 0
  },
  [mediaQuery(1024)]: {
    marginRight: 24,
    ':first-child': {
      display: 'none'
    }
  }
});

const links = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Over',
    url: '/about'
  },
  {
    name: 'Contact',
    url: '/contact'
  }
];

const Navigation = () => (
  <StyledNavigation>
    {links.map(link =>
      <StyledLink to={link.url} key={link.url}>
        {link.name}
      </StyledLink>
    )}
  </StyledNavigation>
);

export default Navigation;
