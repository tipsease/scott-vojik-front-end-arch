import React from 'react';
import { Route } from "react-router-dom"
import styled from "styled-components";
import { connect } from "react-redux"
import { withRouter } from "react-router";

import PatronNavBar from "./Components/NavBar/PatronNavBar"
import StaffListView from "./views/StaffListView"
import StaffView from './views/StaffView';
import FormView from './views/FormView';
import Login from "./Components/Login/Login"
import { getUserType } from './store/actions/index'
import PatronProfileView from "./views/PatronProfileView"
import StaffProfileView from "./views/StaffProfileView"


import './App.css';

const AppStyled = styled.div`
  height: 100%;
  background-color: #fffffd;
  text-align: center;
`

// const StyleNavBar = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   display: flex;
//   justify-content: flex-start;
// `

const Logo = styled.img`
  height: 300px;
  width: auto;
  margin: 24px auto;
`

class App extends React.Component {

  state = {
    userType: ''
  }

  componentDidMount = () => {
    this.props.getUserType();
  }
 

  handleLogout = (e) => {
    localStorage.clear();
  }
  

  
  render() {
    
      return (
        <AppStyled>          
          {/* <StyleNavBar> */}
            
            {/* <NavLink className="nav-link" exact to="/staff-form">Register</NavLink>
            */}
          
            {/* <NavLink className="nav-link" onClick={this.handleLogout} to="/">Logout</NavLink>
            <NavLink className="nav-link" exact to="/patron-profile">Profile</NavLink>
            <NavLink className="nav-link" exact to="/staff-list">Home</NavLink>
            

          </StyleNavBar> */}
          
          
  {/* 
          <Route path="/" component={} /> */}
          
          <Route exact path="/staff-list" render={props => (
            <div>
              <PatronNavBar />
              <Logo src={require("./tipease3.png")} alt="logo"/>
              <StaffListView {...props} />
            </div>
            )} 
          />

          {/* <Route path="/staff-list" component={NavBar} /> */}
          <Route path="/staff-list/:id" render={props => (
            <div>
               <PatronNavBar {...props} /> <StaffView {...props} />   
            </div>
          )}/>


          <Route path="/staff-form" render={props => <FormView {...props} /> } />
          <Route exact path="/" component={Login} />

          <Route path="/patron-profile/:id" render={props => (
            <div>
              <PatronNavBar /> 
              <Logo src={require("./tipease3.png")} alt="logo"/>
              <PatronProfileView {...props} /> 
            </div>
            )
          }/>

          <Route path="/staff-profile/:id" render={props => <StaffProfileView {...props} />} />


        </AppStyled>
      );
    }
  
}

const mapStateToProps = state => ({
  userType: state.userType
})

export default withRouter(connect(
  mapStateToProps,
  { getUserType }
)(App))

// export default App;
