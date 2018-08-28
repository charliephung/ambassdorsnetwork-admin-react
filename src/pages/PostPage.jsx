import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { matchPath } from "react-router-dom";
import api from "../actions/api";
import { FaSave, FaEye, FaEdit, FaTimes } from "react-icons/fa";
import DynamicImport from "components/feature/DynamicImport";
import { actViewPost, actUpdatePost } from "../actions/posts/actPosts";
import firebase from "firebase";

const EditorForm = props => {
  return (
    <DynamicImport
      load={() => import("containers/editor-form/EditForm")}
      render={Comp => (Comp === null ? null : <Comp {...props} />)}
    />
  );
};
const Preview = props => {
  return (
    <DynamicImport
      load={() => import("containers/editor-form/Preview")}
      render={Comp => (Comp === null ? null : <Comp {...props} />)}
    />
  );
};
const ToolBar = props => {
  return (
    <DynamicImport
      load={() => import("containers/tool-bar/ToolBar")}
      render={Comp => (Comp === null ? null : <Comp {...props} />)}
    />
  );
};

export class PostPage extends Component {
  state = { onEdit: false };
  postsListner = firebase.database();

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

  onDelete = (amId, poId) => {
    const input = prompt(
      `Warning!! Delete this post\nTo confirm type in:\nyes`
    );
    if (input == "yes") {
      this.postsListner
        .ref(`/data/${amId}/post/${poId}`)
        .remove()
        .then(() => {
          this.postsListner
            .ref(`/post/${poId}`)
            .remove()
            .then(() => {
              this.props.history.push("/posts");
            });
        });
    } else {
      console.log("Cancel");
    }
  };

  render() {
    const { onEdit } = this.state;
    console.log(this.props);
    const match = matchPath(this.props.location.pathname, {
      path: "/posts/:ambassadorId/post/:postId"
    });
    const toolItem = onEdit
      ? [
          { main: <FaEdit onClick={this.onEdit} /> },
          { main: <FaEye onClick={this.onUnEdit} /> },
          { main: <FaSave onClick={this.onSubmit} /> }
        ]
      : [
          { main: <FaEdit onClick={this.onEdit} /> },
          { main: <FaEye onClick={this.onUnEdit} /> },
          {
            main: (
              <FaTimes
                onClick={() =>
                  this.onDelete(match.params.ambassadorId, match.params.postId)
                }
              />
            )
          }
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
