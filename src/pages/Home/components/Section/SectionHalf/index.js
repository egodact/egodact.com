import PropTypes from 'prop-types';
import styled from 'react-emotion';
import SectionHalfContentWrapper from './SectionHalfContentWrapper';
import { mediaQuery } from '../../../../../styles';

const SectionHalf = styled('aside')({
  width: '50%',
  display: 'inline-block',
  [mediaQuery(1024)]: {
    width: '100%'
  }
}, ({ css }) => css);

SectionHalf.propTypes = {
  css: PropTypes.object
};

SectionHalf.defaultProps = {
  css: null
};

SectionHalf.ContentWrapper = SectionHalfContentWrapper;

export default SectionHalf;
