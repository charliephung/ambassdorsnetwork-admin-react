import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { matchPath } from "react-router-dom";
import api from "../actions/api";
import Editor from "containers/post/Editor";
import Preview from "containers/post/Preview";
import { actViewPost, actUpdatePost } from "../actions/posts/actPosts";

export class PostPage extends Component {
  state = { onEdit: false };
  componentDidMount() {
    //
    const match = matchPath(this.props.location.pathname, {
      path: "/posts/:ambassadorId/post/:postId"
    });
    api.fecthPost(match.params.postId).then(res => {
      this.props.actViewPost({
        ...res.val(),
        ambassadorId: match.params.ambassadorId,
        postId: match.params.postId
      });
    });
  }
  onToggleEdit = () => {
    const { onEdit } = this.state;
    this.setState({
      onEdit: !onEdit
    });
  };

  onSubmit = () => {
    const { viewPost } = this.props;
    this.props.actUpdatePost(viewPost);
  };

  render() {
    const { onEdit } = this.state;

    const { viewPost } = this.props;
    const layout = onEdit ? (
      <Editor
        onSubmit={this.onSubmit}
        actViewPost={this.props.actViewPost}
        onToggleEdit={this.onToggleEdit}
        post={viewPost}
      />
    ) : (
      <Preview onToggleEdit={this.onToggleEdit} post={viewPost} />
    );
    return <div className="container margin-2">{layout}</div>;
  }
}

const mapState = state => ({
  viewPost: state.viewPost
});

const mapDispatch = {
  actViewPost,
  actUpdatePost
};

export default connect(
  mapState,
  mapDispatch
)(PostPage);
