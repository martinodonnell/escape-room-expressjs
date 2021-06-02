var firebase = require("firebase/app");
var admin = require('firebase-admin');
require("firebase/auth");
require("firebase/database");

var config = require("./config");

firebase.initializeApp(config.firebaseConfig);
admin.initializeApp({
    apiKey: config.firebaseConfig.apiKey,
    authDomain: config.firebaseConfig.authDomain,
    databaseURL: config.firebaseConfig.databaseURL,
    projectId: config.firebaseConfig.projectId
});

exports.firebase = firebase;
exports.firebaseAdmin = admin; 