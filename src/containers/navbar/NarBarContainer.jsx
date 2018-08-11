import React, { Component } from "react";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import Navbar from "components/common/navbar/Navbar";
export class NarBarContainer extends Component {
  state = { auth: false };
  render() {
    const { auth } = this.state;
    return (
      <Navbar>
        <div className="container">
          <Navbar.List>
            <Navbar.Item>
              <FaUser />
              &nbsp; Ambassador admin
            </Navbar.Item>

            {auth && (
              <Navbar.Item className="right">
                <FaSignInAlt />
                &nbsp; Logout
              </Navbar.Item>
            )}
          </Navbar.List>
        </div>
      </Navbar>
    );
  }
}

export default NarBarContainer;
