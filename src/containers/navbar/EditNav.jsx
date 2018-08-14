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
            onClick={() => onAdd("<p>\n'text'\n</p>", 4, 6)}
            className="navbar__item--edit"
          >
            <FaParagraph />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<b>\n'text'\n</b>", 4, 6)}
            className="navbar__item--edit"
          >
            <FaBold />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<i>\n'text'\n</i>", 4, 6)}
            className="navbar__item--edit"
          >
            <FaItalic />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<h2>\n'heading'\n</h2>", 5, 9)}
            className="navbar__item--edit"
          >
            <FaHeading />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<a href='url'>name</a>", 9, 3)}
            className="navbar__item--edit"
          >
            <FaLink />
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onAdd("<img src='url' alt='name'>", 10, 3)}
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
