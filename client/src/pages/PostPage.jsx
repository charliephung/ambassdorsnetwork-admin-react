import React, { Component } from "react";
import { connect } from "react-redux";
import { matchPath } from "react-router-dom";
import api from "../actions/api";
import { FaSave, FaEye, FaEdit, FaTimes } from "react-icons/fa";
import DynamicImport from "components/feature/DynamicImport";
import { actUpdatePost } from "../actions/posts/actPosts";
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
  state = { onEdit: false, data: {} };
  postsListner = firebase.database();

  componentDidMount() {
    const match = matchPath(this.props.location.pathname, {
      path: "/posts/:ambassadorId/post/:postId"
    });
    api.fecthPost(match.params.postId).then(res => {
      this.setState({
        data: {
          ...res.val(),
          ambassadorId: match.params.ambassadorId,
          postId: match.params.postId
        }
      });
    });
  }
  onEdit = () => {
    this.setState({ onEdit: true });
  };
  onUnEdit = () => {
    this.setState({ onEdit: false });
  };
  onSubmit = () => {
    const { content, heading, ambassadorId } = this.state.data;
    if (content && heading && ambassadorId) {
      this.props.actUpdatePost(this.state.data);
      this.onUnEdit();
    } else {
      alert("Author, Heading, Content are required");
    }
  };

  onDelete = (amId, poId) => {
    const input = prompt(
      `Warning!! Delete this post\nTo confirm type in:\nyes`
    );
    if (input === "yes") {
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
    const { onEdit, data } = this.state;
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
    const layout = onEdit ? (
      <EditorForm
        className="form__edit"
        onChange={data => this.setState({ data })}
        post={data}
        selectDisabled
      />
    ) : (
      <Preview post={data} />
    );
    return (
      <div className="container  fluid">
        <ToolBar items={toolItem} />
        <div className="page  margin-3">{layout}</div>
      </div>
    );
  }
}

const mapDispatch = {
  actUpdatePost
};

export default connect(
  null,
  mapDispatch
)(PostPage);
