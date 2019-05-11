import React from 'react';
import PropTypes from 'prop-types';
import StyledPost from './StyledPost';
import PostContentWrapper from './PostContentWrapper';
import PostTitle from './PostTitle';
import PostDescription from './PostDescription';
import PostLink from './PostLink';
import { FormattedMessage } from 'react-intl';

const Post = ({ post, highlighted, ...props }) => (
  <StyledPost backgroundImage={post.image} highlighted={highlighted}>
    <PostContentWrapper invisible={!highlighted}>
      <PostTitle>{post.title}</PostTitle>
      <PostDescription>
        {post.description}
      </PostDescription>
      <PostLink href={post.link} target="_blank">
        <FormattedMessage id="pages.home.sections.posts.read_button" />
      </PostLink>
    </PostContentWrapper>
  </StyledPost>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  highlighted: PropTypes.bool
};

Post.defaultProps = {
  highlighted: false
};

export default Post;
