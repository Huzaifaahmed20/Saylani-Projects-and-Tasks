import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import 'firebase/database';

//  Initialize Firebase
var config = {
  apiKey: "AIzaSyBHGFx8N2JANGtrhTny49zn_35dMv7esKI",
  authDomain: "testproject-94aad.firebaseapp.com",
  databaseURL: "https://testproject-94aad.firebaseio.com",
  projectId: "testproject-94aad",
  storageBucket: "testproject-94aad.appspot.com",
  messagingSenderId: "295784371321"
};
firebase.initializeApp(config);


class App extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      todos: [],
      flag: true

    }
    firebase.database().ref('/').child('todos').on("child_added", (snap) => {
      let obj = snap.val();
      obj.id = snap.key
      console.log(obj)
      this.state.todos.push(obj)
      // console.log(obj)
      this.setState({ todos: this.state.todos })
    })

  }
  addtodo() {
    let todo = { todo: this.refs.todo.value }
    firebase.database().ref('/').child('todos').push(todo)
    // console.log(todo)
  }
  remove(ky, ind) {
    var a = this.state.todos
    a = a.slice(0, ind).concat(a.slice(ind + 1));
    this.setState({ todos: a })
    firebase.database().ref('/').child(`todos/${ky}`).remove()

    // console.log(key)
  }
  edit() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input ref="todo" type="text" />
        <button onClick={this.addtodo.bind(this)} >submit</button>
        <ul>
          {this.state.todos.map((val, ind) => {

            return (<li key={ind} > {val.todo} <button onClick={this.remove.bind(this, val.id, ind)} > Remove </button>
              <button onClick={this.edit.bind(this)}> Edit </button>
            </li>)
          })}
        </ul>

      </div>
    );
  }
}

export default App;