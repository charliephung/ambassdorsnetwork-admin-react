import React, { Component } from "react";
import PropTypes from "prop-types";

export class Preview extends Component {
  render() {
    const { content = "<p></p>", heading = "", image = "" } = this.props.post;

    const { className } = this.props;
    return (
      <div className={className}>
        {heading &&
          image && (
            <div className="border padding-4">
              <h1>{heading}</h1>
              <img style={{ width: "100%" }} src={image} alt="" />
            </div>
          )}
        <br />
        <div
          className="post__view"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  }
}

Preview.propTypes = {
  post: PropTypes.object
};

Preview.defaultProps = {
  post: {}
};

export default Preview;
