import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "utils/utils";
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

export class LoginForm extends Component {
  state = { email: "", password: "", error: {} };
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
    const { email, password } = this.state;
    const { error } = this.props.auth;
    const flash = !isEmpty(error) && (
      <div className="flash flash--red">{error}</div>
    );
    return (
      <Form>
        <Heading1>Login</Heading1>
        {flash}
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
)(LoginForm);
