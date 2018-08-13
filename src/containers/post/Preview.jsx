import React, { Component, Fragment } from "react";
import { Button } from "components/common/button/Button";

export class Preview extends Component {
  render() {
    const {
      content = "<p></p>",
      heading = "loading",
      image = ""
    } = this.props.post;
    const { onToggleEdit, className } = this.props;
    return (
      <div className={className}>
        <Button onClick={onToggleEdit} className="btn  btn--lightblue margin-1">
          Edit
        </Button>
        <Button onClick={onToggleEdit} className="btn  btn--red margin-1">
          Delete
        </Button>
        <div className="border padding-4">
          <h1>{heading}</h1>
          <img style={{ width: "100%" }} src={image} alt="" />
        </div>
        <br />
        <br />
        <div
          className="post__view"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  }
}

export default Preview;
