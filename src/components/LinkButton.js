import styled from 'react-emotion';
import Link from 'react-router-dom/Link';
import { buttonStyles } from './Button';

const LinkButton = styled(Link)(buttonStyles, {
  ':hover': {
    opacity: 1
  }
});

export default LinkButton;
