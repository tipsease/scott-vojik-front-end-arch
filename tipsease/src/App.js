import React, { Component } from 'react';
import ReactDOM from "react-dom"
import { Route, NavLink } from "react-router-dom"
import styled from "styled-components";

import HomeView from "./views/HomeView"
import StaffListView from "./views/StaffListView"
import StaffView from './views/StaffView';
import FormView from './views/FormView';

import './App.css';

const AppStyled = styled.div`
  height: 100%;
  background-color: #EEF1E3;
  text-align: center;
`


class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <AppStyled>
        <nav>
          <h1>TipsEase</h1>
          <div className="nav-links">

            
            <NavLink exact to="/staff-form">Add Staff Member</NavLink>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/staff-list">Staff</NavLink>

            <Route exact path="/" component={HomeView} />
            <Route exact path="/staff-list" render={props => (
              <StaffListView {...props} />
            )} />

            <Route path="/staff-list/:id" component={StaffView} />

            <Route path="/staff-form" render={props => <FormView {...props} /> } />
          </div>
        </nav>
      </AppStyled>
    );
  }
}

export default App;
