import { LOGIN, LOGOUT, AUTH_ERROR } from "actions/constant";
import api from "actions/api";

export const actAuth = {
  login: (email, password) => dispatch => {
    api
      .login(email, password)
      .then(() => {
        dispatch({
          type: LOGIN
        });
      })
      .catch(err => {
        dispatch({
          type: AUTH_ERROR,
          payload: err.message
        });
      });
  },
  logout: () => dispatch => {
    api.logout().then(res => {
      dispatch({
        type: LOGOUT
      });
    });
  }
};
