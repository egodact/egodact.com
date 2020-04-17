import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Container from '../Container';
import useReactRouter from 'use-react-router';
import { mediaQuery } from '../../styles';

const StyledHeaderContentWrapper = styled(Container)({
  alignItems: 'center',
  lineHeight: 0,
  [mediaQuery(540)]: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}, ({ isHomePage }) => ({
  width: isHomePage ? 'calc(100% - 320px)' : null,
  [mediaQuery(1200)]: {
    width: isHomePage ? 836 : null
  },
  [mediaQuery(1024)]: {
    width: isHomePage ? 'calc(100% - 48px)' : null
  }
}));

StyledHeaderContentWrapper.propTypes = {
  isHomePage: PropTypes.bool
};

StyledHeaderContentWrapper.defaultProps = {
  isHomePage: false
};

const HeaderContentWrapper = props => {
  const { location } = useReactRouter();
  const isHomePage = location.pathname === '/';

  return <StyledHeaderContentWrapper isHomePage={isHomePage} {...props} />;
};

export default HeaderContentWrapper;
