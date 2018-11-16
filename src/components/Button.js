import styled from 'react-emotion';
import { white, blue, blueHover } from '../colors';

export const buttonStyles = [
  {
    margin: 0,
    padding: '6px 16px',
    color: white,
    backgroundColor: blue,
    font: 'inherit',
    fontWeight: 500,
    border: `1px solid ${blue}`,
    appearance: 'none',
    borderRadius: 6,
    boxSizing: 'border-box',
    display: 'inline-block',
    outlineWidth: 0,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: blueHover
    }
  },
  ({ fullWidth }) => {
    if (fullWidth) {
      return {
        width: '100%'
      };
    }
  }
];

const Button = styled('button')(...buttonStyles);

export default Button;
