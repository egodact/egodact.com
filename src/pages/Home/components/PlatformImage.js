import PropTypes from 'prop-types';
import styled from 'react-emotion';

const PlatformImage = styled('figure')({
  margin: 0,
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}, ({ src }) => ({
  backgroundImage: `url(${src})`
}));

PlatformImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default PlatformImage;
