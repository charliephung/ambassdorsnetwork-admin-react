import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "./components/route/AuthRoute";
import GuestRoute from "./components/route/GuestRoute";
import DynamicImport from "./components/feature/DynamicImport";
import { SideNav, routes } from "routes";

const Routes = routes.map(r => {
  const RouteType = r.type === "auth" ? AuthRoute : GuestRoute;
  return (
    <RouteType
      key={r.path}
      exact={r.exact}
      path={r.path}
      component={props => {
        return (
          <DynamicImport
            load={r.import}
            render={Comp => (Comp === null ? r.loading : <Comp {...props} />)}
          />
        );
      }}
    />
  );
});
const NavBar = props => {
  return (
    <DynamicImport
      load={() => import("./containers/navbar/NavBar")}
      render={Comp => (Comp === null ? null : <Comp {...props} />)}
    />
  );
};

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
            <AuthRoute path="/posts" component={SideNav} />
          </Switch>
          <Switch>{Routes}</Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
