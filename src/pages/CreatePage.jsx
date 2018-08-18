import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actViewPost, actCreatePost } from "actions/posts/actPosts";
import EditorForm from "containers/editor-form/EditForm";
import Preview from "containers/editor-form/Preview";
import firebase from "firebase";

export class CreatePage extends Component {
  state = { onEdit: true };

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
    const { key } = firebase
      .database()
      .ref("/post")
      .push();
    console.log({ ...this.props.viewPost, postId: key });

    // this.props.actCreatePost({ ...this.props.viewPost, postId: key });
    // this.onToggleEdit();
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
  actViewPost
};

export default connect(
  mapState,
  mapDispatch
)(CreatePage);
