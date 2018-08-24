import { FETCH_IMAGES } from "../constant";
import api from "../api";

export const actFetchImages = () => dispatch => {
  api.fecthImages().then(res => {
    dispatch({
      type: FETCH_IMAGES,
      payload: res.val()
    });
  });
};
