var firebase = require("firebase");
var config = require("./config");

firebase.initializeApp(config.firebaseConfig);

exports.firebase = firebase;
 