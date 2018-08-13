import React, { Component, Fragment } from "react";
import { matchPath } from "react-router-dom";
import api from "../actions/api";
import Editor from "containers/post/Editor";
import Preview from "containers/post/Preview";

export class PostPage extends Component {
  state = { post: {}, onEdit: false };
  componentDidMount() {
    const match = matchPath(this.props.location.pathname, {
      path: "/post/:postId"
    });
    api.fecthPost(match.params.postId).then(res => {
      this.setState({
        post: res.val() || {}
      });
    });
  }
  onToggleEdit = () => {
    const { post, onEdit } = this.state;
    this.setState({
      ...post,
      onEdit: !onEdit
    });
  };

  render() {
    console.log(this.state);
    const { post, onEdit } = this.state;
    const layout = onEdit ? (
      <Editor onToggleEdit={this.onToggleEdit} post={post} />
    ) : (
      <Preview onToggleEdit={this.onToggleEdit} post={post} />
    );
    return <div className="container margin-2">{layout}</div>;
  }
}

export default PostPage;
