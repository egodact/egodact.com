import styled from 'react-emotion';
import { mediaQuery } from '../../../../styles';

const TileWrapper = styled('section')({
  margin: -24,
  marginBottom: 24,
  display: 'flex',
  flexWrap: 'wrap',
  ':last-of-type': {
    marginBottom: 0
  },
  [mediaQuery(768)]: {
    margin: 0,
    marginTop: -24
  }
});

export default TileWrapper;
