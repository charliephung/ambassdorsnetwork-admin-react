import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { matchPath } from "react-router-dom";
import api from "../actions/api";
import { FaSave, FaEye, FaEdit } from "react-icons/fa";
import EditorForm from "containers/editor-form/EditForm";
import Preview from "containers/editor-form/Preview";
import ToolBar from "containers/tool-bar/ToolBar";
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
  componentWillUnmount() {
    this.props.actViewPost({});
  }
  onEdit = () => {
    this.setState({ onEdit: true });
  };
  onUnEdit = () => {
    this.setState({ onEdit: false });
  };
  onSubmit = () => {
    const { viewPost } = this.props;
    const { content, heading, ambassadorId } = this.props.viewPost;
    if (content && heading && ambassadorId) {
      this.props.actUpdatePost(viewPost);
      this.onUnEdit();
    } else {
      alert("Some fields are missing");
    }
  };

  render() {
    const { onEdit } = this.state;
    const toolItem = onEdit
      ? [
          { main: <FaEdit onClick={this.onEdit} /> },
          { main: <FaEye onClick={this.onUnEdit} /> },
          { main: <FaSave onClick={this.onSubmit} /> }
        ]
      : [
          { main: <FaEdit onClick={this.onEdit} /> },
          { main: <FaEye onClick={this.onUnEdit} /> }
        ];
    const { viewPost } = this.props;
    const layout = onEdit ? (
      <EditorForm
        onChange={data => this.props.actViewPost(data)}
        post={viewPost}
        selectDisabled
      />
    ) : (
      <Preview post={viewPost} />
    );
    return (
      <div className="container  fluid">
        <ToolBar items={toolItem} />
        <div className="page  margin-3">{layout}</div>
      </div>
    );
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
