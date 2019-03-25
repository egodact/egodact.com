import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { logoBlue } from '../../../colors';

const PlatformImage = styled('figure')({
  margin: 0,
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  border: `3px solid ${logoBlue}`,
  boxSizing: 'border-box'
}, ({ src }) => ({
  backgroundImage: `url(${src})`
}));

PlatformImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default PlatformImage;
