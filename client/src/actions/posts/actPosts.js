import { FETCH_POSTS, VIEW_POST } from "../constant";
import api from "../api";

export const actUpdateStatus = (
  ambassadorId,
  postId,
  fields,
  status
) => dispatch => {
  api.toggleStatus(ambassadorId, postId, fields, status).then(() => {
    api.fecthPosts().once("value", ss => {
      dispatch({
        type: FETCH_POSTS,
        payload: ss.val()
      });
    });
  });
};

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

export const actCreatePost = data => dispatch => {
  const dataCreate = {
    image: data.image,
    heading: data.heading,
    date: {
      day: data.day,
      time: data.time
    },
    status: {
      blogs: false,
      newsAndEvents: false
    }
  };
  const postCreate = {
    content: data.content,
    image: data.image,
    heading: data.heading
  };

  api.createData(dataCreate, data.ambassadorId, data.postId).then(() => {
    api.createPost(postCreate, data.postId).then(() => {
      api.fecthPosts().once("value", ss => {
        dispatch({
          type: FETCH_POSTS,
          payload: ss.val()
        });
      });
    });
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
