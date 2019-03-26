import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white, logoBlue } from '../../../../../colors';
import { transition } from '../../../../../styles';

const StyledPost = styled('article')({
  color: white,
  textAlign: 'center',
  border: `2px solid ${logoBlue}`,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition
}, ({ backgroundImage, highlighted }) => ({
  padding: highlighted ? 48 : 0,
  width: highlighted ? '40vw' : '30vw',
  height: highlighted ? 400 : 300,
  background: `
    linear-gradient(
      rgba(0, 0, 0, .8),
      rgba(0, 0, 0, .8)
    ),
    url(${backgroundImage})
  `,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}));

StyledPost.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  highlighted: PropTypes.bool
};

StyledPost.defaultProps = {
  highlighted: false
};

export default StyledPost;
