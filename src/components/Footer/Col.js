import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledCol = styled('div')({
  paddingLeft: 12,
  paddingRight: 12,
  flex: 1,
  boxSizing: 'border-box',
  ':first-child': {
    paddingLeft: 0,
  },
  ':last-child': {
    paddingRight: 0
  }
});

const ColTitle = styled('h4')({
  marginTop: 0,
  marginBottom: 4
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
