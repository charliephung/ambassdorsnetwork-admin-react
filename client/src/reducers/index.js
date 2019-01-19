import { combineReducers } from "redux";
import auth from "./authReducer";
import posts from "./postsReducer";
import viewPost from "./postReducer";
import images from "./imagesReducer";

const rootReducer = combineReducers({
  auth,
  posts,
  viewPost,
  images
});

export default rootReducer;
