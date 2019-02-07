import React from "react";
import { withRouter } from "react-router"
import styled from "styled-components"
import axios from "axios"
import { NavLink } from "react-router-dom"


const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
  margin-bottom: 64px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const UserInfo = styled.input`
  padding: 30px 10px 20px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border: 1px solid lightgray;
`

const FormButton = styled.button`
  padding: 30px 10px 30px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px auto;
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
  margin: 0 20px;
`

const RadioFont = styled.label`
  font-size: 1.6rem;
`

const StyleNavBar = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const Logo = styled.img`
  height: 300px;
  width: auto;
  margin: 0px auto 24px;
`

const LinkHandle = styled.div`
  margin-left: 5%;
  display: flex;
  justify-content: flex-start;
`

class RegisterForm extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",   //YOU MUSt ALWAYS HAVE A UNIQUE EMAIL
    password: "",
    tagline: "",
    photo_url: "",
    tipperBoolean: false,
    start_date: '',
    errorMsg: null
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSignup = event => {
  event.preventDefault();
  axios
    .post('https://tipsease-backend.herokuapp.com/api/register', {
      // this was a mistake, but you can do it this way
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      tagline: this.state.tagline,
      photo_url: this.state.photo_url,
      start_date: this.state.start_date,
      tipperBoolean: this.state.tipperBoolean === "true" ? true : false
     
    })
    .then(res => {
      localStorage.setItem('jwt', res.data.token);
      console.log("it worked!!", res.data)

      this.props.history.push("/");
    })
    .catch(err => this.setState({ errorMsg: 'This email is already in use' }));
  };


  render() {
    
    return (

      <div>

      <StyleNavBar/>
         <LinkHandle>
        <NavLink className="nav-link" to="/">Login</NavLink>
         </LinkHandle>
      <StyleNavBar/>
      <Logo src={require("../../tipease3.png")} alt="logo"/>
      <FormContainer>
  
        <StyledForm>
  
          <UserInfo type="text" name="first_name" onChange={this.handleChanges} placeholder="First Name" />
          <UserInfo type="text" name="last_name" onChange={this.handleChanges} placeholder="Last Name" />
          <UserInfo type="text" name="email" onChange={this.handleChanges} placeholder="Email" />
          <UserInfo type="password" name="password" onChange={this.handleChanges} placeholder="Password" />
          <UserInfo type="text" name="photo_url" onChange={this.handleChanges} placeholder="Profile Picture (URL)" />

          {this.state.tipperBoolean == "true" ? null : (
            <StyledFormDiv>
          <UserInfo type="text" name="tagline" onChange={this.handleChanges} placeholder="Tagline" />
          <UserInfo type="text" name="start_date" onChange={this.handleChanges} placeholder="Job Start Date" />
          </StyledFormDiv>
          )}

          <RadioContainer>
            <RadioButton type="radio" id="employee"
            name="tipperBoolean" value={false} onChange={this.handleChanges} defaultChecked />
            <RadioFont>Employee</RadioFont>

            <RadioButton type="radio" id="patron"
            name="tipperBoolean" value={true} onChange={this.handleChanges}  />
            <RadioFont>Patron</RadioFont>
          </RadioContainer>
          {/* <input type="text" name="name" onChange={props.changeHandler} placeholder="name" value={props.staff.name} /> */}
  
          <FormButton onClick={this.handleSignup}>Register User</FormButton>
  
        </StyledForm>
  
      </FormContainer>
      </div>
    )
  }
  

}

export default withRouter(RegisterForm);
