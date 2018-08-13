import React, { Component, Fragment } from "react";
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
  state = { heading: "", headerImage: "", content: "" };
  componentDidMount() {
    const {
      content = "<p></p>",
      heading = "loading",
      image = ""
    } = this.props.post;
    this.setState({
      heading,
      headerImage: image,
      content
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { onToggleEdit } = this.props;
    const { heading, headerImage, content } = this.state;
    return (
      <Form>
        <Button type="button" className="btn btn--green  margin-1">
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
            <Input
              onChange={this.onChange}
              name="headerImage"
              value={headerImage}
            />
          </Control>
        </Group>
        <Control>
          <Label>
            <Heading2>Content</Heading2>
          </Label>
          <EditNav />
          <Textarea
            onChange={this.onChange}
            style={{ width: "100%" }}
            name="content"
            id=""
            value={content}
            cols="30"
            rows="50"
          />
        </Control>
      </Form>
    );
  }
}

export default Editor;
