import React from "react";
import { withRouter } from "react-router"
import styled from "styled-components"
import axios from "axios"

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`

const StyledForm = styled.form`
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


class UpdateForm extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",   //YOU MUSt ALWAYS HAVE A UNIQUE EMAIL
    photo_url: '',
    tagline: '',
    start_date: ''
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleEdit= event => {
  event.preventDefault();
  axios
    .put(`https://tipsease-backend.herokuapp.com/api/tippees/${localStorage.getItem('userId')}`, {
      // this was a mistake, but you can do it this way
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      photo_url: this.state.photo_url,
      tagline: this.state.tagline,
      start_date: this.state.start_date,
     
    })
    .then(res => {
      this.props.history.push(`/staff-profile/${localStorage.getItem('userId')}`);
    })
    .catch(err => this.setState({ errorMsg: 'This email is already in use' }));
  };


  render() {
    return (

      <FormContainer>
  
        <StyledForm>
  
          <UserInfo type="text" name="first_name" onChange={this.handleChanges} placeholder="First Name" />
          <UserInfo type="text" name="last_name" onChange={this.handleChanges} placeholder="Last Name" />
          <UserInfo type="text" name="email" onChange={this.handleChanges} placeholder="Email" />
          <UserInfo type="text" name="photo_url" onChange={this.handleChanges} placeholder="Profile Picture (URL)" />
          <UserInfo type="text" name="tagline" onChange={this.handleChanges} placeholder="Tagline" />
          <UserInfo type="text" name="start_date" onChange={this.handleChanges} placeholder="Job Start Date" />
  
          <FormButton onClick={this.handleEdit}>Edit User</FormButton>
  
        </StyledForm>
  
      </FormContainer>
    )
  }
  

}

export default withRouter(UpdateForm);