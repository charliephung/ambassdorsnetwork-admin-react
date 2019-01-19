import { firebaseConfig } from "configs/firebase.js";
import firebase from "firebase";

const fireDB = firebase.database();
const fireAuth = firebase.auth();

const api = {
  login: (email = "", password = "") =>
    fireAuth.signInWithEmailAndPassword(email, password),

  logout: () => fireAuth.signOut(),
  fecthPosts: () => fireDB.ref("/data"),
  fecthPost: id => fireDB.ref(`/post/${id}`).once("value", ss => ss.val()),
  createData: (data, ambassadorId, postId) => {
    return fireDB
      .ref(`/data/${ambassadorId}/post/${postId}`)
      .set(data, ss => ss);
  },
  createPost: (data, postId) => {
    return fireDB.ref("/post/" + postId).set(data, ss => ss);
  },
  editPost: (data, postId) => {
    return fireDB.ref("/post/" + postId).update(data, ss => ss);
  },
  editData: (data, ambassadorId, postId) => {
    return fireDB
      .ref(`/data/${ambassadorId}/post/${postId}`)
      .update(data, ss => ss);
  },
  fecthImages: () => fireDB.ref("/image-gallery").once("value", ss => ss.val()),
  toggleStatus: (ambassadorId, postId, fields, status) =>
    fireDB
      .ref(`/data/${ambassadorId}/post/${postId}/status/`)
      .update({ [fields]: status }, ss => ss)
};

export default api;
