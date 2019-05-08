import styled from 'react-emotion';

const lightBlue = '#6678FF'

const MediumLink = styled('a')({
  color: lightBlue,
  ':hover': {
    opacity: 1,
    textDecoration: 'underline'
  }
});

export default MediumLink;
