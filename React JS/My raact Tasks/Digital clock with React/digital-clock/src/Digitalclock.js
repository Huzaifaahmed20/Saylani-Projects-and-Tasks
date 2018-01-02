import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnalogClock from './Analogclock'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString()
    }
   this.update();   
  }

  update(){
    setInterval(()=>{
      this.setState({
        currentTime:new Date().toLocaleString()
      })
    },1000)
  }



  render() {
    return (
      <div>
      <h1>{this.state.currentTime}</h1>
      <AnalogClock time={this.state.currentTime} />
      </div>
    );
  }
}

export default App;
