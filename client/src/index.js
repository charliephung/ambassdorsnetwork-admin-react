import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "reducers";
import ReactDOM from "react-dom";
import Spinner from "./components/common/loading/Spinner";
import thunk from "redux-thunk";
import { firebaseConfig } from "./configs/firebase.js";
import firebase from "firebase";
import DynamicImport from "./components/feature/DynamicImport";
import "./styles/styles.css";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const fireAuth = firebase.auth();

if (process.env.NODE_ENV !== "production") {
  store.dispatch({
    type: "LOGIN"
  });
}

fireAuth.onAuthStateChanged(user => {
  if (!user) {
    store.dispatch({
      type: "LOGOUT"
    });
  } else {
    store.dispatch({
      type: "LOGIN"
    });
  }
});

ReactDOM.render(
  <Provider store={store}>
    <DynamicImport
      load={() => import("./App.jsx")}
      render={Comp => (Comp === null ? <Spinner /> : <Comp />)}
    />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
