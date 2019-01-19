import { FETCH_POSTS } from "actions/constant";
const initState = {};

const myReducer = (state = initState, actions) => {
  switch (actions.type) {
    case FETCH_POSTS:
      return Object.assign({}, actions.payload);

    default:
      return state;
  }
};

export default myReducer;
