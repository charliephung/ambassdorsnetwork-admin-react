import { LOGIN, LOGOUT, AUTH_ERROR } from "actions/constant";
import api from "actions/api";

export const actAuth = {
  login: data => dispatch => {
    api
      .login(data)
      .then(res => {})
      .catch(err => {
        dispatch({
          type: AUTH_ERROR,
          payload: err.message
        });
      });
  },
  logout: () => ({ type: LOGOUT, payload: {} })
};
