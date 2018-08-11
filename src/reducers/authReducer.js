import { LOGIN, LOGOUT, AUTH_ERROR } from "actions/constant";
const initState = {
  user: {},
  error: {}
};

const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case LOGIN:
      console.log(actions);

      return state;
    case LOGOUT:
      console.log(actions);

      return state;
    case AUTH_ERROR:
      return Object.assign({}, state, { error: actions.payload });
    default:
      return state;
  }
};

export default reducer;
