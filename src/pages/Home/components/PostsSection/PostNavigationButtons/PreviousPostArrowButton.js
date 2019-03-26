import React from 'react';
import PropTypes from 'prop-types';
import ArrowButton from './ArrowButton';
import previousArrowIcon from './icons/previous-arrow.svg';
import posts from '../posts';

const PreviousPostArrowButton = ({ highlightedPostIndex, ...props }) => (
  <ArrowButton {...props}>
    <ArrowButton.Icon src={previousArrowIcon} alt="Pijl naar links" />
    <ArrowButton.Label>
      {highlightedPostIndex === 0 ? (
        posts[posts.length - 1].title
      ) : (
        posts[highlightedPostIndex - 1].title
      )}
    </ArrowButton.Label>
  </ArrowButton>
);

PreviousPostArrowButton.propTypes = {
  highlightedPostIndex: PropTypes.number.isRequired
};

export default PreviousPostArrowButton;
