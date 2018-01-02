import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker';
var config = {
    apiKey: "AIzaSyBRCNyOqYLmdRPQ-H9yyo9tu8zhU0DDIsk",
    authDomain: "poll-app-e0b8e.firebaseapp.com",
    databaseURL: "https://poll-app-e0b8e.firebaseio.com",
    projectId: "poll-app-e0b8e",
    storageBucket: "",
    messagingSenderId: "888357146259"
  };
  firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
