import React, { Fragment } from "react";
import "./styles/_main.scss";
import NarBarContainer from "containers/navbar/NarBarContainer";
import LoginFormContainer from "./containers/login/LoginFormContainer";

const App = () => {
  return (
    <Fragment>
      <NarBarContainer />
      <div className="container padding-4">
        <div className="center-element">
          <LoginFormContainer />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
