import React from 'react';
import { Route, NavLink } from "react-router-dom"
import styled from "styled-components";

import HomeView from "./views/HomeView"
import StaffListView from "./views/StaffListView"
import StaffView from './views/StaffView';
import FormView from './views/FormView';
import Login from "./Components/Login/Login"

import './App.css';

const AppStyled = styled.div`
  height: 100%;
  background-color: #fffffd;
  text-align: center;
`

const StyleNavBar = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
`

const Logo = styled.img`
  height: 300px;
  width: auto;
  margin: 24px auto;
`

class App extends React.Component {
 

  handleLogout = (e) => {
    localStorage.clear();
  }
  

  
  render() {
    return (
      <AppStyled>          
        <StyleNavBar>
          
          {/* <NavLink className="nav-link" exact to="/staff-form">Register</NavLink>
          <NavLink className="nav-link" exact to="/">Home</NavLink> */}
          <NavLink className="nav-link" to="/staff-list">Staff</NavLink>
          <NavLink className="nav-link" onClick={this.handleLogout} to="/login">Logout</NavLink>

        </StyleNavBar>

        <Logo src={require("./tipease3.png")} alt="logo"/>

        <Route exact path="/" component={HomeView} />
        
        <Route exact path="/staff-list" render={props => (
          <StaffListView {...props} />
          )} 
        />

        <Route path="/staff-list/:id" component={StaffView} />
        <Route path="/staff-form" render={props => <FormView {...props} /> } />
        <Route path="/login" component={Login} />

      </AppStyled>
    );
  }
}

export default App;
