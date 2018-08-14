import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actFetchPosts, actViewPost } from "actions/posts/actPosts";
import PostContainer from "containers/post/PostContainer";
import api from "../actions/api";
import ToolBar from "containers/tool-bar/ToolBar";
import EditForm from "containers/editor-form/EditForm";

const wrapperStyles = { width: "100%" };
const textareaStyles = { width: "100%", height: "500px", padding: "1rem" };

class AdminPage extends Component {
  state = {
    showEditor: false
  };

  componentDidMount() {
    this.props.actFetchPosts();
  }

  onToggleEditor = () => {
    this.setState({ showEditor: !this.state.showEditor });
  };

  onCreatePost = () => {
    console.log(this.props.viewPost);
  };

  render() {
    const { showEditor } = this.state;
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
    const editor = showEditor && (
      <div className="margin-1">
        <EditForm
          onSubmit={this.onCreatePost}
          actViewPost={this.props.actViewPost}
          post={{}}
        />
      </div>
    );

    return (
      <div style={wrapperStyles}>
        <ToolBar onToggleEditor={this.onToggleEditor} />
        {editor}
        <div>{body}</div>
      </div>
    );
  }
}

const mapState = state => ({
  posts: state.posts,
  viewPost: state.viewPost
});

const mapDispatch = {
  actFetchPosts,
  actViewPost
};

export default connect(
  mapState,
  mapDispatch
)(AdminPage);
