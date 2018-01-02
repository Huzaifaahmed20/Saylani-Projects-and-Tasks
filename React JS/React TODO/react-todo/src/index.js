import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker';
var config = {
    apiKey: "AIzaSyBHGFx8N2JANGtrhTny49zn_35dMv7esKI",
    authDomain: "testproject-94aad.firebaseapp.com",
    databaseURL: "https://testproject-94aad.firebaseio.com",
    projectId: "testproject-94aad",
    storageBucket: "testproject-94aad.appspot.com",
    messagingSenderId: "295784371321"
  };
  firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
