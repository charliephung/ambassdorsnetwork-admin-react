import React, { Component } from "react";
import {
  FaBold,
  FaItalic,
  FaHeading,
  FaLink,
  FaImages,
  FaParagraph
} from "react-icons/fa";
import Navbar from "components/common/nav/Nav";

export class EditNav extends Component {
  render() {
    const { onAdd } = this.props;
    return (
      <Navbar className="navbar--dark ">
        <Navbar.List>
          <Navbar.Item
            onClick={() => onAdd("<p></p>")}
            className="navbar__item--edit"
          >
            <FaParagraph />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<b></b>")}
            className="navbar__item--edit"
          >
            <FaBold />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<i></i>")}
            className="navbar__item--edit"
          >
            <FaItalic />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<h1></h1>")}
            className="navbar__item--edit"
          >
            <FaHeading />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<a href='url'>name</a>")}
            className="navbar__item--edit"
          >
            <FaLink />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<img src='url' alt='name'>")}
            className="navbar__item--edit"
          >
            <FaImages />
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    );
  }
}

export default EditNav;
