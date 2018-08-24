import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import AuthRoute from "components/route/AuthRoute";
import GuestRoute from "components/route/GuestRoute";
import "./styles/_main.scss";
import NavBar from "containers/navbar/NavBar";
import {
  LoginPage,
  AdminPage,
  SideNav,
  PostPage,
  CreatePage,
  ImagePage
} from "routes";

const App = () => {
  return (
    <Router>
      <div style={{ overflow: "hidden" }}>
        <NavBar style={{ height: "30%" }} className="fluid" />
        <div
          style={{ height: "calc(100vh - 56px)" }}
          className="container fluid flex"
        >
          <Switch>
            <AuthRoute path="/" component={SideNav} />
          </Switch>
          <Switch>
            <AuthRoute exact path="/" component={AdminPage} />
            <AuthRoute exact path="/posts" component={AdminPage} />
            <AuthRoute exact path="/posts/image" component={ImagePage} />
            <AuthRoute exact path="/posts/create" component={CreatePage} />
            <AuthRoute
              path="/posts/:ambassadorId/post/:postId"
              component={PostPage}
            />

            <GuestRoute exact path="/login" component={LoginPage} />
            <Route
              render={() => (
                <div className="padding-4">
                  <h1>Not Found</h1>
                  <Link className=" center-element color-dark" to="/">
                    Go to Home
                  </Link>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default hot(module)(App);
