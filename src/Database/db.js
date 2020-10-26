import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAFSm0Ib3uXax5aj1kDpGC3yNpvmp6EASA",
  authDomain: "shopapp-e0a36.firebaseapp.com",
  databaseURL: "https://shopapp-e0a36.firebaseio.com",
  projectId: "shopapp-e0a36",
  storageBucket: "shopapp-e0a36.appspot.com",
  messagingSenderId: "322415648561",
  appId: "1:322415648561:web:b2f2caead529b7bd0a5a10",
  measurementId: "G-TCVRE12JKH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export const authentication = firebase.auth();
