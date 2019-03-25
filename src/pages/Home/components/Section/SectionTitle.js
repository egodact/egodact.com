import PropTypes from 'prop-types';
import styled from 'react-emotion';

const SectionTitle = styled('h1')({
  fontSize: 28,
  fontWeight: 600,
  ':last-child': {
    marginBottom: 0
  }
}, ({ inHalf }) => {
  if (inHalf) {
    return {
      textAlign: 'left',
      fontSize: 24
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
