import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { transition } from '../../../../../styles';

const PostContentWrapper = styled('div')({
  transition
}, ({ invisible }) => ({
  transform: invisible ? 'scale(1.1)' : 'none',
  opacity: invisible ? 0 : 1
}));

PostContentWrapper.propTypes = {
  invisible: PropTypes.bool
};

PostContentWrapper.defaultProps = {
  invisible: false
};

export default PostContentWrapper;
