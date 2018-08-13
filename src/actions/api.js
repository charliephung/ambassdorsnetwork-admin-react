import axios from "axios";
import { firebaseConfig } from "configs/firebase.js";
import firebase from "firebase";

const fireDB = firebase.database();
const fireAuth = firebase.auth();

const api = {
  login: (email = "", password = "") =>
    fireAuth.signInWithEmailAndPassword(email, password),

  logout: () => fireAuth.signOut(),
  fecthPosts: () => fireDB.ref("/data").once("value", ss => ss.val()),
  fecthPost: id => fireDB.ref(`/post/${id}`).once("value", ss => ss.val())
};

export default api;
