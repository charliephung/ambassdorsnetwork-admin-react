import { LOGIN, LOGOUT, AUTH_ERROR } from "actions/constant";
const initState = {
  user: false,
  error: {}
};

const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case LOGIN:
      return Object.assign({}, state, { user: true });
    case LOGOUT:
      return { user: false, error: {} };
    case AUTH_ERROR:
      return Object.assign({}, state, { error: actions.payload });
    default:
      return state;
  }
};

export default reducer;
