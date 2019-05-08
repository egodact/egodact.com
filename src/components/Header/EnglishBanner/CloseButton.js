import styled from 'react-emotion';
import { mediaQuery } from '../../../styles';

const CloseButton = styled('button')({
  float: 'right',
  margin: 0,
  padding: 0,
  font: 'inherit',
  color: 'inherit',
  background: 'none',
  border: 0,
  appearance: 'none',
  outlineWidth: 0,
  cursor: 'pointer',
  textDecoration: 'underline',
  ':hover': {
    opacity: .5
  },
  [mediaQuery(600)]: {
    float: 'none',
    marginTop: 20,
    display: 'block'
  }
});

export default CloseButton;
