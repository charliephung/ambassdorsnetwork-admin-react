import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actFetchPosts } from "actions/posts/actPosts";
import PostContainer from "containers/post/PostContainer";
import ToolBar from "containers/tool-bar/ToolBar";

const wrapperStyles = { width: "100%" };
class AdminPage extends Component {
  componentDidMount() {
    this.props.actFetchPosts();
  }
  render() {
    const { posts } = this.props;
    const ambassadors = Object.keys(posts).map(ele => {
      return { post: posts[ele], id: ele };
    });
    const allPost = ambassadors.reduce((newArr, ele) => {
      if (ele.post.post) {
        Object.keys(ele.post.post).forEach(id => {
          newArr.push({
            id: ele.id,
            postId: id,
            email: ele.post.email,
            name: ele.post.name,
            profile: ele.post.profile,
            ...ele.post.post[id]
          });
        });
      }
      return newArr;
    }, []);

    const body = <PostContainer onView={this.onView} posts={allPost} />;
    return (
      <div style={wrapperStyles}>
        <ToolBar onToggleEditor={this.onToggleEditor} />
        <div>{body}</div>
      </div>
    );
  }
}

const mapState = state => ({
  posts: state.posts
});

const mapDispatch = {
  actFetchPosts
};

export default connect(
  mapState,
  mapDispatch
)(AdminPage);
