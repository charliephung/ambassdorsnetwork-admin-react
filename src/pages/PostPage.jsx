import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { matchPath } from "react-router-dom";
import api from "../actions/api";
import EditorForm from "containers/editor-form/EditForm";
import Preview from "containers/editor-form/Preview";
import { actViewPost, actUpdatePost } from "../actions/posts/actPosts";

export class PostPage extends Component {
  state = { onEdit: false };
  componentDidMount() {
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
  componentWillMount() {
    this.props.actViewPost({});
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
    this.onToggleEdit();
  };

  render() {
    const { onEdit } = this.state;

    const { viewPost } = this.props;
    const layout = onEdit ? (
      <EditorForm
        onChange={data => this.props.actViewPost(data)}
        onSubmit={this.onSubmit}
        actViewPost={this.props.actViewPost}
        onToggleEdit={this.onToggleEdit}
        post={viewPost}
      />
    ) : (
      <Preview onToggleEdit={this.onToggleEdit} post={viewPost} />
    );
    return <div className="container fluid margin-2">{layout}</div>;
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
