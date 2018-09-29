import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 1024,
  maxWidth: 'calc(100% - 48px)'
}, ({ flex }) => {
  if (flex) return {
    display: 'flex',
    flexWrap: 'wrap'
  };
});

Container.propTypes = {
  flex: PropTypes.bool
};

Container.defaultProps = {
  flex: false
};

export default Container;
