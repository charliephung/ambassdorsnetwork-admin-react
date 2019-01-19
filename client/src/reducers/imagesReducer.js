import { FETCH_IMAGES } from "actions/constant";

const initState = {};

const myReducer = (state = initState, actions) => {
  switch (actions.type) {
    case FETCH_IMAGES:
      return actions.payload;
    default:
      return state;
  }
};

export default myReducer;
