import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { transition, mediaQuery } from '../../../../styles';

const InnerPostsWrapper = styled('div')({
  position: 'relative',
  height: 300,
  display: 'flex',
  alignItems: 'center',
  transition,
  [mediaQuery(1024)]: {
    height: 400
  }
}, ({ highlightedPostIndex }) => ({
  marginLeft: `${450 - highlightedPostIndex * 30}vw`,
  [mediaQuery(1024)]: {
    marginLeft: `${450 - (highlightedPostIndex + 1) * 30}vw`
  }
}));

InnerPostsWrapper.propTypes = {
  highlightedPostIndex: PropTypes.number.isRequired
};

export default InnerPostsWrapper;
