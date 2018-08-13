import { combineReducers } from "redux";
import auth from "./authReducer";
import posts from "./postsReducer";

const rootReducer = combineReducers({
  auth,
  posts
});

export default rootReducer;
