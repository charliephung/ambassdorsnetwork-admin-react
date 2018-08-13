import { FETCH_POSTS } from "../constant";
import api from "../api";

export const actFetchPosts = () => dispatch => {
  api.fecthPosts().then(res => {
    dispatch({
      type: FETCH_POSTS,
      payload: res.val()
    });
  });
};
