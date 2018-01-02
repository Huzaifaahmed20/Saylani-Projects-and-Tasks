import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import renderTodo from './render'

class App extends Component { //npm install firebase .. package.json me save nh hogi
  constructor() { // npm install --save firebase .. for package.json
    super()
    this.state = {
    
    }
  
  }
  submit() {
   let userData = {
     todo: this.refs.text.value
   }
   firebase.database().ref("/").child("todo").push(userData)
  }

  render() {
    return (
      <div>
        
        {/*<h1>{this.state.currentTime}</h1>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.deccrement.bind(this)}>-</button>
        <p>{this.state.count}</p>*/}
        <input type="text" ref="text"/>
        <button onClick={this.submit.bind(this)}>Submit</button>
        <renderTodo/>
      </div>
    );
  }
}

export default App;
