import React, { Component, Fragment } from "react";
import { withRouter, matchPath } from "react-router-dom";
import { Button } from "components/common/button/Button";
import {
  Form,
  Group,
  Control,
  Input,
  Label,
  Textarea
} from "components/common/form/Form";
import { Heading2 } from "components/common/heading/Heading";
import EditNav from "containers/navbar/EditNav";

export class Editor extends Component {
  state = { ambassadorId: "", heading: "", image: "", content: "" };
  componentDidMount() {
    const match = matchPath(this.props.location.pathname, {
      path: "/posts/:ambassadorId/post/:postId"
    });
    const {
      content = "<p></p>",
      heading = "loading",
      image = ""
    } = this.props.post;
    this.setState({
      heading,
      image,
      content,
      ambassadorId: match.params.ambassadorId,
      postId: match.params.postId
    });
  }

  onAdd = data => {
    console.log(this.refs.textarea.focus());

    console.log(data);
  };

  onChange = e => {
    console.log(e.target.selectionStart);

    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.props.actViewPost(this.state);
      }
    );
  };

  onSubmit = e => {
    this.props.onSubmit();
  };

  render() {
    const { onToggleEdit, className } = this.props;
    const { heading, image, content } = this.state;

    return (
      <Form className={className}>
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
          <Label>
            <Heading2>Content</Heading2>
          </Label>
          <EditNav onAdd={this.onAdd} />
          <Textarea
            ref="textarea"
            onChange={this.onChange}
            style={{ width: "100%" }}
            name="content"
            id=""
            className="editor"
            value={content}
            cols="30"
            rows="50"
          />
        </Control>
      </Form>
    );
  }
}

export default withRouter(Editor);
