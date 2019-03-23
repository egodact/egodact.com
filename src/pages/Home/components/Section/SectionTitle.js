import PropTypes from 'prop-types';
import styled from 'react-emotion';

const SectionTitle = styled('h1')({
  textAlign: 'center',
  fontSize: 36,
  ':last-child': {
    marginBottom: 0
  }
}, ({ inHalf }) => {
  if (inHalf) {
    return {
      marginBottom: 18,
      textAlign: 'left',
      fontSize: 32
    };
  }
});

SectionTitle.propTypes = {
  inHalf: PropTypes.bool
};

SectionTitle.defaultProps = {
  inHalf: false
};

export default SectionTitle;
