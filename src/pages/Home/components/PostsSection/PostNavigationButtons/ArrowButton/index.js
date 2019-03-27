import PropTypes from 'prop-types';
import styled from 'react-emotion';
import ArrowButtonIcon from './ArrowButtonIcon';
import ArrowButtonLabel from './ArrowButtonLabel';
import { white } from '../../../../../../colors';
import { transition, mediaQuery } from '../../../../../../styles';

const ArrowButton = styled('button')({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: 0,
  width: 200,
  color: white,
  background: 'none',
  border: 0,
  appearance: 'none',
  outlineWidth: 0,
  cursor: 'pointer',
  zIndex: 1,
  transition,
  ':hover': {
    opacity: .7
  },
  [mediaQuery(1024)]: {
    padding: '12px 24px',
    width: 'auto'
  },
  [mediaQuery(640)]: {
    top: -50,
    transform: 'none'
  }
}, ({ right }) => {
  const padding = 'calc((30vw - 200px) / 2)';

  if (right) {
    return {
      right: padding,
      [mediaQuery(1024)]: {
        right: 0
      }
    };
  }

  return {
    left: padding,
    [mediaQuery(1024)]: {
      left: 0
    }
  };
});

ArrowButton.propTypes = {
  right: PropTypes.bool
};

ArrowButton.defaultProps = {
  right: false
};

ArrowButton.Icon = ArrowButtonIcon;
ArrowButton.Label = ArrowButtonLabel;

export default ArrowButton;
