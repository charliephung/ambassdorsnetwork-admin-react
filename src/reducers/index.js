import { combineReducers } from "redux";
import auth from "./authReducer";
import posts from "./postsReducer";
import viewPost from "./postReducer";

const rootReducer = combineReducers({
  auth,
  posts,
  viewPost
});

export default rootReducer;
