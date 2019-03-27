import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { mediaQuery } from '../../../../styles';

const SectionTitle = styled('h1')({
  fontSize: 28,
  fontWeight: 600,
  ':last-child': {
    marginBottom: 0
  },
  [mediaQuery(1024)]: {
    fontSize: 24
  }
}, ({ inHalf }) => {
  if (inHalf) {
    return {
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
