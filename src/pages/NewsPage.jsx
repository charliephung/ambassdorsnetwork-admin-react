import React, { Component } from "react";
import Editor from "containers/editor-form/Editor";
import Preview from "containers/editor-form/Preview";
import ToolBar from "containers/tool-bar/ToolBar";
import { FaSave } from "react-icons/fa";
import firebase from "firebase";

export class NewsPage extends Component {
  state = { content: "" };
  newsListner = firebase.database().ref("/news");

  setContent = val => {
    this.setState({
      content: val
    });
  };

  componentDidMount() {
    this.newsListner.on("value", ss => this.setContent(ss.val().newsBody));
  }
  componentWillUnmount() {
    this.newsListner.off("value", ss => this.setContent(ss.val().newsBody));
  }

  onSubmit = () => {
    const { content } = this.state;
    this.newsListner.update({ newsBody: content }, () => {
      alert("Updated");
    });
  };

  render() {
    const { content } = this.state;
    const toolItem = [{ main: <FaSave onClick={this.onSubmit} /> }];
    return (
      <div className="container scrollY  fluid">
        <ToolBar items={toolItem} />
        <div style={{ justifyContent: "center" }} className="flex-wrap flex">
          <div className="margin-1" style={{ width: "40%", minWidth: "600px" }}>
            <Editor
              value={content}
              onChange={(value, cb) =>
                this.setState(
                  {
                    content: value
                  },
                  () => cb && cb()
                )
              }
            />
          </div>
          <div
            id="custom-preview"
            className="margin-1"
            style={{ width: "40%", minWidth: "600px" }}
          >
            <Preview post={{ content }} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
