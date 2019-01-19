import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Form,
  Group,
  Control,
  Input,
  Label,
  Textarea
} from "components/common/form/Form";
import { Button } from "components/common/button/Button";

export class UserForm extends Component {
  state = {
    email: "",
    address: "",
    ambassador: false,
    id: "",
    interest: "",
    name: "",
    profile: ""
  };
  componentDidMount() {
    const {
      email = "",
      address = "",
      ambassador = false,
      id,
      interest = "",
      name = "",
      profile = ""
    } = this.props.data;
    this.setState({
      email,
      address,
      ambassador,
      id,
      interest,
      name,
      profile
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, address, interest, name, profile } = this.state;
    const { onCancelEdit, onSubmit } = this.props;

    return (
      <div
        className="popup"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          margin: "0 auto"
        }}
      >
        <Form className="user__form">
          <Group>
            <Control>
              <Label>Email</Label>
              <Input onChange={this.onChange} name="email" value={email} />
            </Control>
            <Control>
              <Label>Name</Label>
              <Input onChange={this.onChange} name="name" value={name} />
            </Control>
            <Control>
              <Label>Country</Label>
              <Input onChange={this.onChange} name="address" value={address} />
            </Control>
            <Control>
              <Label>Area of interest</Label>
              <Textarea
                style={{ width: "100%" }}
                rows="10"
                onChange={this.onChange}
                name="interest"
                value={interest}
              />
            </Control>
            <Control>
              <Label>Image Url</Label>
              <Input onChange={this.onChange} name="profile" value={profile} />
            </Control>
            <Control>
              <img style={{ height: "200px" }} src={profile} alt={name} />
            </Control>
            <Control>
              <Button
                type="button"
                onClick={() => onSubmit(this.state)}
                className="btn--green"
              >
                Save
              </Button>
              <Button
                type="button"
                onClick={() => onCancelEdit(null)}
                className="btn--red"
              >
                Cancel
              </Button>
            </Control>
          </Group>
        </Form>
      </div>
    );
  }
}

UserForm.propTypes = {
  data: PropTypes.object.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UserForm;
