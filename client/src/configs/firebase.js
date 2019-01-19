import firebase from "firebase/app";
import config from "./firebase.dev";

export const firebaseConfig = config();

firebase.initializeApp(firebaseConfig);
