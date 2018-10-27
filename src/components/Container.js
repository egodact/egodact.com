import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 1024,
  maxWidth: 'calc(100% - 48px)'
}, ({ flex, withPadding }) => {
  const styles = [];

  if (flex) styles.push({
    display: 'flex',
    flexWrap: 'wrap'
  });

  if (withPadding) styles.push({
    paddingTop: 36,
    paddingBottom: 36
  });

  return styles;
});

Container.propTypes = {
  flex: PropTypes.bool,
  withPadding: PropTypes.bool
};

Container.defaultProps = {
  flex: false,
  withPadding: false
};

export default Container;
