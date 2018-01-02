import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">Counter App</h1>
        <h3 className="text-center text-success"> MAX Limit is 10</h3>
        <h3 className="text-center text-info"> MIN Limit is -5</h3>
        <p className="text-center text-muted"> After reaching limit if you click 3 times the button it will block you for 30 seconds</p>
        <div className="jumbotron">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <button disabled={this.props.disable} className="btn btn-success btn-lg btn-block" style={{ display: this.props.incrDisplay }} onClick={this.props.incr} >Increment</button>
              <button disabled={this.props.disable} className="btn btn-danger btn-lg btn-block" style={{ display: this.props.decrDisplay }} onClick={this.props.decr} >Decrement</button>
              <h1 className="text-center">{this.props.counter}</h1>
              <p className="text-center" style={{ display: this.props.displaytime }}>Time Remaining: {this.props.whattime} secs</p>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
