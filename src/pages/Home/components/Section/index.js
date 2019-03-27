import PropTypes from 'prop-types';
import styled from 'react-emotion';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import SectionHalf from './SectionHalf';
import { mediaQuery } from '../../../../styles';

const Section = styled('section')({
  paddingTop: 84,
  paddingBottom: 84,
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
Section.Text = SectionText;
Section.Half = SectionHalf;

export default Section;
