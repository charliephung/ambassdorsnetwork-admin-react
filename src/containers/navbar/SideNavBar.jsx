import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/common/nav/Nav";

export class SideNavContainer extends Component {
  render() {
    return (
      <Nav className="navbar--side navbar--dark">
        <Nav.List className="navbar__list--side">
          <Nav.Item>
            <Link to="/posts">POSTS</Link>
          </Nav.Item>
          <Nav.Item>NEWS</Nav.Item>
          <Nav.Item>USERS</Nav.Item>
          <Nav.Item>
            <Link to="/posts/image">IMAGES</Link>
          </Nav.Item>
        </Nav.List>
      </Nav>
    );
  }
}

export default SideNavContainer;
