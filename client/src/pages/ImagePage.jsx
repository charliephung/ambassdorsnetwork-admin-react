import React, { Component, Fragment } from "react";
import ToolBar from "containers/tool-bar/ToolBar";
import { FaImage } from "react-icons/fa";
import { connect } from "react-redux";
import ImagesContainer from "containers/images/ImagesContainer";
import { Input, Label } from "components/common/form/Form";
import { Button } from "components/common/button/Button";
import firebase from "firebase";
import { actFetchImages } from "actions/posts/actImages";

export class ImagePage extends Component {
  state = { file: null, upload: null };
  componentDidMount() {
    this.props.actFetchImages();
  }
  onChange = e => {
    const file = e.target.files[0];
    this.setState({
      file
    });
  };
  onUpload = () => {
    const { file } = this.state;
    const storageRef = firebase
        .storage()
        .ref("/image-gallery/" + file.name + file.lastModified + Date.now()),
      uploadTask = storageRef.put(file);
    // Goolge stuff
    uploadTask.on(
      "state_changed",
      snapshot => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          upload: progress + "%"
        });
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            break;
          case firebase.storage.TaskState.RUNNING:
            break;
          default:
            break;
        }
      },
      error => {
        console.log(error);
      },
      () => {
        uploadTask.then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
          const image = { name: file.name, url };
          // save data to firebase
          const { key } = firebase
            .database()
            .ref(`/image-gallery/`)
            .push();
          firebase
            .database()
            .ref(`/image-gallery/${key}`)
            .set(image)
            .then(() => {
              this.setState({
                file: null,
                upload: null
              });
              this.props.actFetchImages();
            });
        });
      }
    );
  };
  render() {
    const { images } = this.props;
    const { upload } = this.state;
    const imagesArr = Object.keys(images).map(ele => {
      return {
        name: images[ele].name,
        url: images[ele].url,
        imageId: ele
      };
    });

    const toolItem = [
      {
        main: (
          <Fragment>
            <Label htmlFor="upload">
              <FaImage />
              <Input
                onChange={this.onChange}
                style={{ display: "none" }}
                id="upload"
                type="file"
              />
              &nbsp;
              <span>
                {this.state.file ? this.state.file.name : "Upload a image"}
              </span>
            </Label>
            &nbsp;
            {this.state.file && (
              <Button onClick={this.onUpload}>
                {upload ? upload : "Upload"}
              </Button>
            )}
          </Fragment>
        )
      }
    ];
    return (
      <div className="container  fluid">
        <ToolBar items={toolItem} />
        <div className="margin-3">
          <ImagesContainer images={imagesArr} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images
});

const mapDispatchToProps = {
  actFetchImages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagePage);
