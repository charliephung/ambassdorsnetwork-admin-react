import { FETCH_POSTS, VIEW_POST } from "../constant";
import api from "../api";

export const actFetchPosts = () => dispatch => {
  api.fecthPosts().once("value", ss => {
    dispatch({
      type: FETCH_POSTS,
      payload: ss.val()
    });
  });
};

export const actViewPost = post => dispatch => {
  dispatch({
    type: VIEW_POST,
    payload: post
  });
};

export const actUpdatePost = data => dispatch => {
  const postEdit = {
    content: data.content,
    image: data.image,
    heading: data.heading
  };
  const dataEdit = {
    image: data.image,
    heading: data.heading
  };
  api.editPost(postEdit, data.postId).then(() => {
    api.editData(dataEdit, data.ambassadorId, data.postId).then(() => {
      api.fecthPosts().once("value", ss => {
        dispatch({
          type: FETCH_POSTS,
          payload: ss.val()
        });
      });
    });
  });
};
