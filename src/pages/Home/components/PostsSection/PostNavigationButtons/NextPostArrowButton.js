import React from 'react';
import PropTypes from 'prop-types';
import ArrowButton from './ArrowButton';
import nextArrowIcon from './icons/next-arrow.svg';
import posts from '../posts';

const NextPostArrowButton = ({ highlightedPostIndex, ...props }) => (
  <ArrowButton {...props} right>
    <ArrowButton.Icon src={nextArrowIcon} alt="Pijl naar rechts" />
    <ArrowButton.Label>
      {highlightedPostIndex === posts.length - 1 ? (
        posts[0].title
      ) : (
        posts[highlightedPostIndex + 1].title
      )}
    </ArrowButton.Label>
  </ArrowButton>
);

NextPostArrowButton.propTypes = {
  highlightedPostIndex: PropTypes.number.isRequired
};

export default NextPostArrowButton;
