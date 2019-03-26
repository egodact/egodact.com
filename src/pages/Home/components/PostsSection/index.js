import React, { Component } from 'react';
import SectionWrapper from './SectionWrapper';
import PreviousPostArrowButton from './PostNavigationButtons/PreviousPostArrowButton';
import NextPostArrowButton from './PostNavigationButtons/NextPostArrowButton';
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

  render = () => {
    const highlightedPostIndex = this.state.highlightedPostIndex;
    return (
      <SectionWrapper>
        <PreviousPostArrowButton
          highlightedPostIndex={highlightedPostIndex}
          onClick={this.previousPost}
        />
        <NextPostArrowButton
          highlightedPostIndex={highlightedPostIndex}
          onClick={this.nextPost}
        />
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
      </SectionWrapper>
    );
  };
}
