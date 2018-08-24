import React, { Component } from "react";
import { connect } from "react-redux";
import { actViewPost, actCreatePost } from "actions/posts/actPosts";
import { FaSave, FaEye, FaEdit } from "react-icons/fa";
import EditorForm from "containers/editor-form/EditForm";
import Preview from "containers/editor-form/Preview";
import firebase from "firebase";
import ToolBar from "containers/tool-bar/ToolBar";

export class CreatePage extends Component {
  state = { onEdit: true };
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
    const { key } = firebase
      .database()
      .ref("/post")
      .push();

    this.props.actCreatePost({ ...this.props.viewPost, postId: key });
    this.onUnEdit();
  };
  render() {
    const { onEdit } = this.state;
    const { viewPost } = this.props;
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
    const layout = onEdit ? (
      <EditorForm
        onChange={data => this.props.actViewPost(data)}
        post={viewPost}
      />
    ) : (
      <Preview post={viewPost} />
    );
    return (
      <div className="container scrollY fluid">
        <ToolBar items={toolItem} />
        <div className="margin-3">{layout}</div>
      </div>
    );
  }
}

const mapState = state => ({
  viewPost: state.viewPost
});

const mapDispatch = {
  actViewPost,
  actCreatePost
};

export default connect(
  mapState,
  mapDispatch
)(CreatePage);
