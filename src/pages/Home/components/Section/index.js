import PropTypes from 'prop-types';
import styled from 'react-emotion';
import SectionTitle from './SectionTitle';
import SectionHalf from './SectionHalf';
import { mediaQuery } from '../../../../styles';

const Section = styled('section')({
  paddingTop: 'calc(100vw / 16)',
  paddingBottom: 'calc(100vw / 16)',
  '@media screen and (min-width: 2000px)': {
    paddingTop: 125,
    paddingBottom: 125
  },
  [mediaQuery(1024)]: {
    paddingTop: 24,
    paddingBottom: 24
  }
}, ({ color, backgroundColor, split }) => {
  const styles = [];

  if (split) {
    styles.push({
      paddingTop: 0,
      paddingBottom: 0,
      display: 'flex',
      '@media screen and (min-width: 2000px)': {
        paddingTop: 0,
        paddingBottom: 0,
      },
      [mediaQuery(1024)]: {
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'column'
      }
    });
  }

  styles.push({
    color,
    backgroundColor
  });

  return styles;
}, ({ css }) => css);

Section.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  split: PropTypes.bool,
  css: PropTypes.object
};

Section.defaultProps = {
  split: false,
  css: {}
};

Section.Title = SectionTitle;
Section.Text = 'p';
Section.Half = SectionHalf;

export default Section;
