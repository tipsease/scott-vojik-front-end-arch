import React from "react";
import { withRouter } from "react-router"
import axios from 'axios';

import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`

const Logo = styled.img`
  height: 450px;
  width: auto;
  margin: 24px auto;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserInfo = styled.input`
  padding: 30px 10px 20px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border-color: lightgray;
`

const LoginButtons = styled.button`
  padding: 30px 10px 30px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border-color: lightgray;

  &:hover {
    background-color: #5CA143
    color: white;
  }
`

const RadioContainer = styled.div`
  margin: 8px auto 20px;
  display: flex;
  justify-content: center;
`

const RadioButton = styled.input`
  padding: 16px;
  width: 16px;
  height: 16px;
  margin: 0 5%;
`

const RadioFont = styled.label`
  font-size: 1.6rem;
`

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    tipperBoolean: false,
    
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // handleLogin = e => {
  //   localStorage.setItem(`${this.state.username}`, 'user')
  // }

  handleRegister = (e) => {
    e.preventDefault();
    this.props.history.push("/staff-form")

  }


  handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'https://tipsease-david-freitag-backend.herokuapp.com/api/';

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };



  handleSignup = event => {
    event.preventDefault();

    axios
      .post('https://tipsease-david-freitag-backend.herokuapp.com/api/', {
        email: this.state.email,
        password: this.state.password,
        tipperBoolean: this.state.tipperBoolean
        //department: this.state.department
      })
      .then(res => {
        localStorage.setItem('jwt', res.data.token);

        this.props.history.push('/');
      })
      .catch(err => this.setState({ errorMsg: 'lol try again nub' }));
  };

  render() {
    return (
      <LoginContainer>
        <Logo src={require("../../tipease3.png")} alt="logo"/>
        <StyledForm>

          <UserInfo type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange}  />
          <UserInfo type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange}  />

          <ButtonContainer>

            <div>

              <RadioContainer>
                <RadioButton type="radio" id="employee"
                name="tipperBoolean" value="employee" />
                <RadioFont>Employee</RadioFont>

                <RadioButton type="radio" id="patron"
                name="tipperBoolean" value="patron" defaultChecked />
                <RadioFont>Patron</RadioFont>
              </RadioContainer>

              <LoginButtons onClick={this.handleLogin}>Log In</LoginButtons>

            </div>
            
            <LoginButtons onClick={this.handleRegister}>Register</LoginButtons>
          </ButtonContainer>

        </StyledForm>


      </LoginContainer>
    )
  }
}

export default withRouter(Login);
