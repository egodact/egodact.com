import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { transition } from '../../../../styles';

const InnerPostsWrapper = styled('div')({
  position: 'relative',
  height: 300,
  display: 'flex',
  alignItems: 'center',
  transition
}, ({ highlightedPostIndex }) => ({
  marginLeft: `${450 - highlightedPostIndex * 30}vw`
}));

InnerPostsWrapper.propTypes = {
  highlightedPostIndex: PropTypes.number.isRequired
};

export default InnerPostsWrapper;
