import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { blue } from '../../../../colors';
import { mediaQuery } from '../../../../styles';

const Tile = styled('a')({
  margin: 24,
  padding: 32,
  height: 200,
  lineHeight: 1,
  fontSize: 32,
  color: 'inherit',
  backgroundColor: '#F5F5F5',
  borderRadius: 6,
  textDecoration: 'none',
  boxSizing: 'border-box',
  whitespace: 'break-all',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#EEEEEE',
    opacity: 1
  },
  [mediaQuery(768)]: {
    marginLeft: 0,
    marginRight: 0,
    fontSize: 24,
    flex: 1,
    minWidth: 'calc(100% - 64px)'
  },
  [mediaQuery(420)]: {
    padding: 16,
    fontSize: 20,
    minWidth: 'calc(100% - 32px)'
  },
  [mediaQuery(360)]: {
    fontSize: 18
  }
}, ({ smallText }) => {
  if (smallText) {
    return {
      color: blue,
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 'inherit',
      flex: 1,
      [mediaQuery(360)]: {
        fontSize: 18
      }
    };
  }
});

Tile.propTypes = {
  smallText: PropTypes.bool
};

Tile.defaultProps = {
  smallText: false
};

export default Tile;
