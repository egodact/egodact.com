import PropTypes from 'prop-types';
import styled from 'react-emotion';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import SectionHalf from './SectionHalf';

const Section = styled('section')({
  paddingTop: 36,
  paddingBottom: 36
}, ({ color, backgroundColor, split }) => {
  const styles = [];

  if (split) {
    styles.push({
      paddingTop: 0,
      paddingBottom: 0,
      display: 'flex'
    });
  }

  styles.push({
    color,
    backgroundColor
  });

  return styles;
});

Section.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  split: PropTypes.bool
};

Section.defaultProps = {
  split: false
};

Section.Title = SectionTitle;
Section.Text = SectionText;
Section.Half = SectionHalf;

export default Section;
