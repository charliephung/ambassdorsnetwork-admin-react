import React, { Component, Fragment } from "react";

export class Preview extends Component {
  render() {
    const { content = "<p></p>", heading = "", image = "" } = this.props.post;
    const { className } = this.props;
    return (
      <div className={className}>
        <div className="container">
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
      </div>
    );
  }
}

export default Preview;
