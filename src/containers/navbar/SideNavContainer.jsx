import React, { Component } from "react";
import Navbar from "../../components/common/navbar/Navbar";

export class SideNavContainer extends Component {
  render() {
    return (
      <div className="container flex padding-top-4">
        <Navbar className="navbar--side navbar--dark">
          <Navbar.List className="navbar__list--side">
            <Navbar.Item>POSTs</Navbar.Item>
            <Navbar.Item>NEWS</Navbar.Item>
            <Navbar.Item>USERS</Navbar.Item>
            <Navbar.Item>GALLERY</Navbar.Item>
          </Navbar.List>
        </Navbar>
      </div>
    );
  }
}

export default SideNavContainer;
