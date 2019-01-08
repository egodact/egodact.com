import styled from 'react-emotion';
import { mediaQuery } from '../../../../../styles';

const InfoWrapper = styled('article')({
  paddingLeft: 24,
  paddingRight: 24,
  textAlign: 'center',
  boxSizing: 'border-box',
  flex: 1,
  [mediaQuery(850)]: {
    marginBottom: 32,
    padding: 0,
    minWidth: '100%',
    maxWidth: '100%',
    ':last-child': {
      marginBottom: 0
    }
  }
});

export default InfoWrapper;
