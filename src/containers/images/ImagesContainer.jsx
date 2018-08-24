import React, { Component, Fragment } from "react";
import "./Image.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "components/common/button/Button";

const Image = ({ url, name, focus, ...rest }) => {
  return (
    <figure {...rest} className={`image ${focus ? "focus" : ""}`}>
      <p>{name}</p>
      <img src={url} alt={name} />
    </figure>
  );
};

export class ImagesContainer extends Component {
  state = { url: "", focus: "" };

  render() {
    const { images } = this.props;
    return (
      <div>
        <div className="flex copy">
          <CopyToClipboard
            text={this.state.url}
            onCopy={(text, result) => {
              console.log(text);
            }}
          >
            <Button className="btn--green margin-1">Copy URL</Button>
          </CopyToClipboard>
          <p>{this.state.url}</p>
        </div>
        <div
          style={{ height: "calc(100vh - 130px" }}
          className="flex page  scrollY flex-wrap"
        >
          {images.map(ele => {
            return (
              <Image
                key={ele.imageId}
                focus={this.state.focus === ele.imageId ? true : false}
                onClick={() => {
                  this.setState({
                    url: ele.url,
                    focus: ele.imageId
                  });
                }}
                url={ele.url}
                name={ele.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ImagesContainer;
