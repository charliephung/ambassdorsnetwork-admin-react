import React, { Component } from "react";
import Navbar from "components/common/nav/Nav";

export class EditNav extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.List>
          <Navbar.Item>Bold</Navbar.Item>
          <Navbar.Item>Italic</Navbar.Item>
          <Navbar.Item>Heading</Navbar.Item>
          <Navbar.Item>Link</Navbar.Item>
          <Navbar.Item>Image</Navbar.Item>
        </Navbar.List>
      </Navbar>
    );
  }
}

export default EditNav;
