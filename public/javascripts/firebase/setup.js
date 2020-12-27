var firebase = require("firebase/app");
var admin = require('firebase-admin');
require("firebase/auth");
require("firebase/database");

var config = require("./config");

firebase.initializeApp(config.firebaseConfig);
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: config.firebaseConfig.databaseURL
});

exports.firebase = firebase;
exports.firebaseAdmin = admin; 