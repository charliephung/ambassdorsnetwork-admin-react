import React, { Component } from "react";
import { connect } from "react-redux";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import Navbar from "components/common/navbar/Navbar";
import { actAuth } from "actions/auth/actAuth";
export class NarBarContainer extends Component {
  logout = () => {
    this.props.logout();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <Navbar>
        <div className="container">
          <Navbar.List>
            <Navbar.Item>
              <FaUser />
              &nbsp; Ambassador admin
            </Navbar.Item>

            {user && (
              <Navbar.Item onClick={this.logout} className="right">
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

const mapState = state => ({
  auth: state.auth
});

const mapDispatch = {
  logout: actAuth.logout
};

export default connect(
  mapState,
  mapDispatch
)(NarBarContainer);
