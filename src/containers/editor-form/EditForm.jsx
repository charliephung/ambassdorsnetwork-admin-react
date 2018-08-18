import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";
import PropTypes from "prop-types";
import {
  Form,
  Group,
  Control,
  Input,
  Label,
  Select,
  Option
} from "components/common/form/Form";
import { Heading2 } from "components/common/heading/Heading";
import Editor from "./Editor";

class EditorForm extends Component {
  state = {
    ambassadorId: "",
    heading: "",
    image: "",
    content: "",
    postId: "",
    day: "",
    time: ""
  };
  componentDidMount() {
    const {
      content = "",
      heading = "",
      image = "",
      ambassadorId = "",
      postId = "",
      day = "",
      time = ""
    } = this.props.post;
    this.setState({
      heading,
      image,
      content,
      ambassadorId,
      postId,
      day,
      time
    });
  }

  onEditorChange = (value, cb) => {
    this.setState(
      {
        content: value
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
        if (cb) {
          cb();
        }
      }
    );
  };
  onChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };

  render() {
    const { className, posts, selectDisabled } = this.props;
    const { heading, image, content, ambassadorId, day, time } = this.state;
    let selectedOption = 0;
    const options = Object.keys(posts).map(ele => {
      if (ambassadorId === ele) {
        selectedOption = 1;
      }
      return (
        <Option value={ele} selected={ambassadorId === ele} key={ele}>
          {posts[ele].email}
        </Option>
      );
    });
    if (selectedOption === 0) {
      options.push(
        <Option disabled selected value="0" key={0}>
          -- select an option --
        </Option>
      );
    }

    return (
      <Form className={className}>
        <Group>
          <Control>
            <Label>
              <Heading2>Ambassador</Heading2>
            </Label>
            <Select
              onChange={this.onChange}
              name="ambassadorId"
              disabled={selectDisabled}
            >
              {options}
            </Select>
          </Control>
          <Control>
            <Label>
              <Heading2>Date</Heading2>
            </Label>
            <Input
              onChange={this.onChange}
              name="day"
              type="date"
              value={day}
              disabled={selectDisabled}
            />
            <Input
              onChange={this.onChange}
              name="time"
              type="time"
              value={time}
              disabled={selectDisabled}
            />
          </Control>
          <Control>
            <Label>
              <Heading2>Heading</Heading2>
            </Label>
            <Input onChange={this.onChange} name="heading" value={heading} />
          </Control>
          <Control>
            <Label>
              <Heading2>Header Image</Heading2>
            </Label>
            <Input onChange={this.onChange} name="image" value={image} />
          </Control>
        </Group>
        <Control>
          <Label htmlFor="textarea">
            <Heading2>Content</Heading2>
          </Label>
          <Editor
            value={content}
            name="content"
            onChange={(value, cb) => {
              this.onEditorChange(value, cb);
            }}
          />
        </Control>
      </Form>
    );
  }
}

EditorForm.propTypes = {
  onChange: PropTypes.func,
  post: PropTypes.object.isRequired
};

const mapState = state => ({
  posts: state.posts
});

export default connect(
  mapState,
  null
)(withRouter(EditorForm));
