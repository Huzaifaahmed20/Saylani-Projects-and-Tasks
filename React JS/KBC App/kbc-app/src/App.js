import React, { Component } from 'react';
// import banner from './images/banner.png';
import './App.css';
import Login from './myComponents/login';
import {
  Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Signup from './myComponents/Signup';
import Mainpage from './myComponents/Mainpage';
import login from './myComponents/login';
import SignUpOrLogin from './myComponents/SignUpOrLogin';
const customHistory = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        
              <div>
              <Route exact path="/" component={Mainpage} />
              <Route path = "/Signuporlogin" component={SignUpOrLogin}/> 
              <Route path = "/login" component={login}/>
              <Route path="/Signup" component={Signup} />
              </div>
          

      </Router>
    );
  }
}

export default App;
