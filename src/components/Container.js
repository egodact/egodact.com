import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import useReactRouter from 'use-react-router';

const StyledContainer = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 'calc(100% - 48px)'
}, ({ flex, withPadding, isHomePage }) => {
  const styles = [];

  styles.push({
    width: isHomePage ? 836 : 1024
  });

  if (flex) styles.push({
    display: 'flex',
    flexWrap: 'wrap'
  });

  if (withPadding) styles.push({
    paddingTop: 36,
    paddingBottom: 36
  });

  return styles;
});

const Container = props => {
  const { location } = useReactRouter();
  const isHomePage = location.pathname === '/';
  return <StyledContainer isHomePage={isHomePage} {...props} />;
};

Container.propTypes = {
  flex: PropTypes.bool,
  withPadding: PropTypes.bool
};

Container.defaultProps = {
  flex: false,
  withPadding: false
};

export default Container;
