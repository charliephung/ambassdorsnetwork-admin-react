import React, { Component } from "react";
import { connect } from "react-redux";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import Nav from "components/common/nav/Nav";
import { actAuth } from "actions/auth/actAuth";
export class NavBar extends Component {
  logout = () => {
    this.props.logout();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <Nav>
        <div className="container">
          <Nav.List>
            <Nav.Item>
              <FaUser />
              &nbsp; Ambassador admin
            </Nav.Item>

            {user && (
              <Nav.Item onClick={this.logout} className="right">
                <FaSignInAlt />
                &nbsp; Logout
              </Nav.Item>
            )}
          </Nav.List>
        </div>
      </Nav>
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
)(NavBar);
