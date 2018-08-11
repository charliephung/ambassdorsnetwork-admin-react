import axios from "axios";
import { firebaseConfig } from "configs/firebase.js";
import firebase from "firebase";

const fireDB = firebase.database();
const fireAuth = firebase.auth();

const api = {
  login: (email = "", password = "") =>
    fireAuth.signInWithEmailAndPassword(email, password),

  logout: () => fireAuth.signOut()
};

export default api;
