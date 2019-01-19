import React, { Component } from "react";
import { connect } from "react-redux";
import { actCreatePost, actFetchPosts } from "actions/posts/actPosts";
import { FaSave, FaEye, FaEdit } from "react-icons/fa";
import EditorForm from "containers/editor-form/EditForm";
import Preview from "containers/editor-form/Preview";
import firebase from "firebase";
import ToolBar from "containers/tool-bar/ToolBar";

export class CreatePage extends Component {
  state = { onEdit: true, data: {} };
  componentDidMount() {
    this.props.actFetchPosts();
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
    const {
      ambassadorId = "",
      heading = "",
      content = "",
      day = "",
      time = ""
    } = this.state.data;
    if (
      ambassadorId === "" ||
      heading === "" ||
      content === "" ||
      day === "" ||
      time == ""
    ) {
      alert("Author, Date, Heading, Content are required");
    } else {
      this.props.actCreatePost({ ...this.state.data, postId: key });
      this.onUnEdit();
    }
  };
  render() {
    const { onEdit, data } = this.state;
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
        className="form__edit"
        onChange={data =>
          this.setState({
            data
          })
        }
        post={data}
      />
    ) : (
      <Preview post={data} />
    );
    return (
      <div className="container scrollY fluid">
        <ToolBar items={toolItem} />
        <div className="margin-3">{layout}</div>
      </div>
    );
  }
}

const mapDispatch = {
  actCreatePost,
  actFetchPosts
};

export default connect(
  null,
  mapDispatch
)(CreatePage);
