"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.provider = exports.auth = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyA2UmN-wXWaUZQUKL6TUfcfiSMXedPCua4",
  authDomain: "whatsapp-clone-1de44.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-1de44.firebaseio.com",
  projectId: "whatsapp-clone-1de44",
  storageBucket: "whatsapp-clone-1de44.appspot.com",
  messagingSenderId: "130932360076",
  appId: "1:130932360076:web:5d8aa435f02dbf13c9cca9",
  measurementId: "G-8DE2MJY2LK"
};

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

var auth = _firebase["default"].auth();

exports.auth = auth;
var provider = new _firebase["default"].auth.GoogleAuthProvider();
exports.provider = provider;
var _default = db;
exports["default"] = _default;