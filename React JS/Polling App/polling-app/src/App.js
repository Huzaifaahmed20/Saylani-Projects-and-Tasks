// import React, { Component } from 'react';
import {
  Route, Router
} from 'react-router-dom';
import './App.css';
import React from 'react'
import  PollForm  from './PollForm';
import Poll from './Poll';
import  ViewPoll  from './ViewPoll';
import Nav from './Navbar'

import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();
const App = () => {
  return (
    <Router history={customHistory}>
      <div>
        <Nav/>

        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/" component={PollForm} />
        <Route path="/ViewPoll" component={ViewPoll} />
        <Route path="/:pollname" component={Poll}/>
        {/*<Route component={Nothing} />*/}

      </div>

    </Router>

  );
}

export default App;
