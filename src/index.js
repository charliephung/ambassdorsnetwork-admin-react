import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "reducers";
import ReactDOM from "react-dom";
import App from "App";
import thunk from "redux-thunk";
import { firebaseConfig } from "configs/firebase.js";
import firebase from "firebase";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const fireAuth = firebase.auth();

store.dispatch({
  type: "LOGIN"
});

fireAuth.onAuthStateChanged(user => {
  if (!user) {
    store.dispatch({
      type: "LOOUT"
    });
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
