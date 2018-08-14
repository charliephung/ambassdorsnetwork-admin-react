import React, { Component, Fragment } from "react";
import { withRouter, matchPath } from "react-router-dom";
import { Button } from "components/common/button/Button";
import PropTypes from "prop-types";
import {
  Form,
  Group,
  Control,
  Input,
  Label,
  Textarea
} from "components/common/form/Form";
import { Heading2 } from "components/common/heading/Heading";
import Editor from "./Editor";

class EditorForm extends Component {
  state = { ambassadorId: "", heading: "", image: "", content: "", postId: "" };
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
    const { onToggleEdit, className } = this.props;
    const { heading, image, content } = this.state;

    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

EditorForm.propTypes = {
  actViewPost: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  post: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withRouter(EditorForm);
