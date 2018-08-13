import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isEmpty } from "utils/utils";

const GuestRoute = props => {
  if (props.auth.user) {
    return <Redirect to="/post" />;
  }
  const Comp = props.component;
  return (
    <Route
      render={rest => {
        return <Comp {...rest} />;
      }}
    />
  );
};

const mapState = state => ({
  auth: state.auth
});

export default connect(
  mapState,
  null
)(GuestRoute);
