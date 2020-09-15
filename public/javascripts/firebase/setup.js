var firebase = require("firebase");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAaqkXNMAKXwmJKki19GhKgS8EEuoMnRx8",
  authDomain: "escape-room-4b570.firebaseapp.com",
  databaseURL: "https://escape-room-4b570.firebaseio.com",
  projectId: "escape-room-4b570",
  storageBucket: "escape-room-4b570.appspot.com",
  messagingSenderId: "66985354458",
  appId: "1:66985354458:web:edffce5c07c4ebde8131e3",
  measurementId: "G-Q4JFKKT96R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

exports.firebase = firebase;
