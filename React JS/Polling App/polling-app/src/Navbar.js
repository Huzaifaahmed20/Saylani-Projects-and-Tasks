import React from 'react';
import {
    Link
} from 'react-router-dom';

 const Nav = (props) => (
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Audience Poll</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        {/* <li><Link className="btn btn-lg" data-toggle="modal" to="/PollForm">Create Poll</Link></li> */}
                        <li><Link className="btn btn-lg" to="/ViewPoll">Previous Poll</Link></li>
                        <li><Link className="btn btn-lg" to="/:pollname"></Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default Nav;