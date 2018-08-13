import { VIEW_POST } from "actions/constant";

const initState = {};

const myReducer = (state = initState, actions) => {
  switch (actions.type) {
    case VIEW_POST:
      return actions.payload;
    default:
      return state;
  }
};

export default myReducer;
