import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white, logoBlue } from '../../../../../colors';
import { transition, mediaQuery } from '../../../../../styles';

const StyledPost = styled('article')({
  color: white,
  textAlign: 'center',
  border: `2px solid ${logoBlue}`,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition,
  [mediaQuery(1024)]: {
    border: 0
  }
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
  backgroundRepeat: 'no-repeat',
  [mediaQuery(1024)]: {
    padding: highlighted ? 24 : null,
    paddingTop: highlighted ? 48 : null,
    width: highlighted ? '100vw' : null,
    height: highlighted ? 500 : 400
  }
}));

StyledPost.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  highlighted: PropTypes.bool
};

StyledPost.defaultProps = {
  highlighted: false
};

export default StyledPost;
