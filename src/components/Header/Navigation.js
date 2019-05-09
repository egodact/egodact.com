import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { mediaQuery } from '../../styles';
import { injectIntl, intlShape } from 'react-intl';

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

const links = intl => [
  {
    name: intl.formatMessage({ id: 'header.navigation.home' }),
    url: '/'
  },
  {
    name: intl.formatMessage({ id: 'header.navigation.about' }),
    url: '/about'
  },
  {
    name: intl.formatMessage({ id: 'header.navigation.contact' }),
    url: '/contact'
  }
];

const Navigation = ({ intl }) => (
  <StyledNavigation>
    {links(intl).map(link =>
      <StyledLink to={link.url} key={link.url}>
        {link.name}
      </StyledLink>
    )}
  </StyledNavigation>
);

Navigation.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Navigation);
