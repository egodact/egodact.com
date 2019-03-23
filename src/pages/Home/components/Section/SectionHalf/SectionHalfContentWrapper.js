import PropTypes from 'prop-types';
import styled from 'react-emotion';

const SectionHalfContentWrapper = styled('div')({
  paddingTop: 24,
  paddingBottom: 24,
  width: 512,
  maxWidth: 'calc(100% - 24px)',
  boxSizing: 'border-box'
}, ({ left }) => {
  if (left) {
    return {
      marginLeft: 'auto',
      paddingRight: 24
    };
  }

  return {
    paddingLeft: 24
  };
});

SectionHalfContentWrapper.propTypes = {
  left: PropTypes.bool
};

SectionHalfContentWrapper.defaultProps = {
  left: false
};

export default SectionHalfContentWrapper;
