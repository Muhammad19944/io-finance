import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import makeServer from "server/index";

import "assets/css/index.css";

// Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

if (process.env.NODE_ENV === "development") {
	makeServer({ environment: "development" });
}

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field

// var firebaseConfig = {
// 	apiKey: "AIzaSyDSNrzprjAssIo-ZfLskMFrZ3TmtavOsNU",
// 	authDomain: "io-finance.firebaseapp.com",
// 	projectId: "io-finance",
// 	storageBucket: "io-finance.appspot.com",
// 	messagingSenderId: "995386125950",
// 	appId: "1:995386125950:web:c87261a618f2627b2eb22f",
// 	measurementId: "G-01QLKKV5K1",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
