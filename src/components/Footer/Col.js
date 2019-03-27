import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { mediaQuery } from '../../styles';

const StyledCol = styled('div')({
  paddingLeft: 24,
  paddingRight: 24,
  flex: 1,
  boxSizing: 'border-box',
  ':first-child': {
    paddingLeft: 0,
  },
  ':last-child': {
    paddingRight: 0
  },
  [mediaQuery(768)]: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 24,
    minWidth: '100%',
    ':last-child': {
      paddingBottom: 0
    }
  }
});

const ColTitle = styled('h4')({
  marginTop: 0,
  marginBottom: 4,
  fontWeight: 600
});

const Col = ({ title, children, ...props }) => (
  <StyledCol {...props}>
    {title &&
      <ColTitle>{title}</ColTitle>
    }
    {children}
  </StyledCol>
);

Col.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node
};

export default Col;
