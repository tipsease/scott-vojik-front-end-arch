import React, { Component } from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import axios from "axios"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger";

import HomeView from "./views/HomeView"
import StaffListView from "./views/StaffListView"




import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        <nav>
          <h1>hello world</h1>
          <div className="nav-links">

            <NavLink exact to="/staff-form">Add Staff Member</NavLink>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/staff-list">Staff</NavLink>

            <Route exact path="/" component={HomeView} />
            <Route exact path="/staff-list" render={props => (
              <StaffListView {...props} />
            )} />
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
