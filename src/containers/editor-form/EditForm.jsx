import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "components/common/button/Button";
import PropTypes from "prop-types";
import {
  Form,
  Group,
  Control,
  Input,
  Label,
  Textarea,
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
      postId = ""
    } = this.props.post;
    this.setState({
      heading,
      image,
      content,
      ambassadorId,
      postId
    });
  }
  onSubmit = e => {
    this.props.onSubmit();
  };
  onEditorChange = (value, cb) => {
    this.setState(
      {
        content: value
      },
      () => {
        this.props.actViewPost(this.state);
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
        this.props.actViewPost(this.state);
      }
    );
  };

  render() {
    const { onToggleEdit, className, posts, selectDisabled } = this.props;
    const { heading, image, content, ambassadorId } = this.state;
    const options = Object.keys(posts).map(ele => {
      return (
        <Option value={ele} selected={ambassadorId === ele} key={ele}>
          {posts[ele].email}
        </Option>
      );
    });

    return (
      <div>
        <Button
          onClick={this.onSubmit}
          type="button"
          className="btn btn--green  margin-1"
        >
          Save
        </Button>
        <Button
          type="button"
          onClick={onToggleEdit}
          className="btn btn--lightblue margin-1"
        >
          Preview
        </Button>
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
              />
              <Input
                onChange={this.onChange}
                name="time"
                type="time"
                value={time}
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
      </div>
    );
  }
}

EditorForm.propTypes = {
  actViewPost: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  post: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapState = state => ({
  posts: state.posts
});

export default connect(
  mapState,
  null
)(withRouter(EditorForm));
