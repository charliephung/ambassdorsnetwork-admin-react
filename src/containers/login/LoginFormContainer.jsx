import React, { Component } from "react";
import { connect } from "react-redux";
// import { isEmpty } from "utils";
import { actAuth } from "actions/auth/actAuth";
import {
  Form,
  Group,
  Control,
  Input,
  Label
} from "components/common/form/Form";
import { Button } from "components/common/button/Button";
import { Heading1 } from "components/common/heading/Heading";

// console.log(isEmpty);

export class LoginFormContainer extends Component {
  state = { email: "", password: "", error: {} };
  componentDidUpdate() {
    console.log(this.props);

    // if (isEmpty(this.props.auth.error)) {
    //   this.setState({
    //     error: this.props.auth.error
    //   });
    // }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    console.log("--render--");

    const { email, password, error } = this.state;
    return (
      <Form>
        <Heading1>Login</Heading1>
        <Group>
          <Control className="padding-1">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={this.onChange}
              name="email"
              value={email}
              id="email"
            />
          </Control>
          <Control className="padding-1">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={this.onChange}
              name="password"
              value={password}
              type="password"
              id="password"
            />
          </Control>
          <Control className="padding-1">
            <Button
              onClick={this.signin}
              className="btn--block btn--big btn--blue"
            >
              Sign in
            </Button>
          </Control>
        </Group>
      </Form>
    );
  }
}

const mapState = state => ({
  auth: state.auth
});

const mapDispatch = {
  login: actAuth.login,
  logout: actAuth.logout
};

export default connect(
  mapState,
  mapDispatch
)(LoginFormContainer);
