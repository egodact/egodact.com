import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { logoBlue } from '../../../../../colors';

const PostLink = styled('a')({
  color: '#097EDE',
  fontSize: 16,
  fontWeight: 600,
  textTransform: 'uppercase',
  display: 'block',
  ':hover': {
    opacity: .7
  }
});

export default PostLink;
