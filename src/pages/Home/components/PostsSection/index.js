import React, { Component, Fragment } from 'react';
import PostsWrapper from './PostsWrapper';
import InnerPostsWrapper from './InnerPostsWrapper';
import posts from './posts';
import Post from './Post';

export default class PostsSection extends Component {
  state = {
    highlightedPostIndex: 1
  };

  previousPost = () => {
    if (this.state.highlightedPostIndex === 0) {
      this.setState({
        highlightedPostIndex: posts.length - 1
      });
      return;
    }

    this.setState(state => ({
      highlightedPostIndex: state.highlightedPostIndex - 1
    }));
  };

  nextPost = () => {
    if (this.state.highlightedPostIndex === posts.length - 1) {
      this.setState({
        highlightedPostIndex: 0
      });
      return;
    }

    this.setState(state => ({
      highlightedPostIndex: state.highlightedPostIndex + 1
    }));
  };


////
/**
 * TODO TODO
 */
  render = () => {
    const highlightedPostIndex = this.state.highlightedPostIndex;
    return (
      <Fragment>
      <button onClick={this.previousPost}>
        {highlightedPostIndex === 0 ? (
          posts[posts.length - 1].title
        ) : (
          posts[highlightedPostIndex - 1].title
        )}
      </button>
      <button onClick={this.nextPost}>
        {highlightedPostIndex === posts.length - 1 ? (
          posts[0].title
        ) : (
          posts[highlightedPostIndex + 1].title
        )}
      </button>
      <PostsWrapper>
        <InnerPostsWrapper highlightedPostIndex={highlightedPostIndex}>
          <Post post={posts[posts.length - 1]} />
          {posts.map((post, i) =>
            <Post
              post={post}
              highlighted={i === highlightedPostIndex}
              key={i}
            />
          )}
          <Post post={posts[0]} />
        </InnerPostsWrapper>
      </PostsWrapper>
      </Fragment>
    );
  };
}
