import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { transition, mediaQuery } from '../../../../../styles';

const PostContentWrapper = styled('div')({
  transition,
  [mediaQuery(1024)]: {
    minWidth: 'calc(100vw - 48px)'
  }
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
