import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { grey } from '../../../../colors';

const SectionText = styled('p')({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 600,
  textAlign: 'center',
  opacity: .7
}, ({ inHalf }) => {
  if (inHalf) {
    return {
      marginLeft: 0,
      marginRight: 0,
      textAlign: 'left'
    };
  }
});

SectionText.propTypes = {
  inHalf: PropTypes.bool
};

SectionText.defaultProps = {
  inHalf: false
};

export default SectionText;
