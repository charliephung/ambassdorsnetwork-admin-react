import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AuthRoute from "components/route/AuthRoute";
import GuestRoute from "components/route/GuestRoute";
import "./styles/_main.scss";
import NarBarContainer from "containers/navbar/NarBarContainer";
import { LoginPage, AdminPage, SideNav } from "routes";

const App = () => {
  return (
    <Router>
      <Fragment>
        <NarBarContainer />
        <Switch>
          <AuthRoute exact path="/" component={SideNav} />
        </Switch>
        <Switch>
          <AuthRoute exact path="/" component={AdminPage} />
          <GuestRoute path="/login" component={LoginPage} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
