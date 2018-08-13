import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AuthRoute from "components/route/AuthRoute";
import GuestRoute from "components/route/GuestRoute";
import "./styles/_main.scss";
import NavBar from "containers/navbar/NavBar";
import { LoginPage, AdminPage, SideNav, PostPage } from "routes";

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className="container flex">
          <Switch>
            <AuthRoute path="/post" component={SideNav} />
          </Switch>
          <Switch>
            <AuthRoute exact path="/" component={AdminPage} />
            <AuthRoute exact path="/post" component={AdminPage} />
            <AuthRoute path="/post/:postId" component={PostPage} />
            <GuestRoute exact path="/login" component={LoginPage} />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
