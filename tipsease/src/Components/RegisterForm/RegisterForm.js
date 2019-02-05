import React from "react";
import { withRouter } from "react-router"
import styled from "styled-components"

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
  border-color: lightgray;
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

function RegisterForm(props) {

  const handleClick = ev => {
    ev.preventDefault();
    if (props.isEditing) {
      props.editStaff();
    } else {
      props.addNewStaff();
    }
    props.history.push('/staff-list')
  }

  return (


    <FormContainer>

    <StyledForm>

      <UserInfo type="text" name="name" onChange={props.changeHandler} placeholder="Name" value={props.staff.name} />
      <UserInfo type="text" name="imgUrl" onChange={props.changeHandler} placeholder="Profile Picture" value={props.staff.imgUrl} />
      <UserInfo type="text" name="price" onChange={props.changeHandler} placeholder="Price" value={props.staff.price} />
      <UserInfo type="text" name="description" onChange={props.changeHandler} placeholder="Description" value={props.staff.description} />
      {/* <input type="text" name="name" onChange={props.changeHandler} placeholder="name" value={props.staff.name} /> */}

      <FormButton onClick={handleClick}>Register User</FormButton>

    </StyledForm>

    </FormContainer>
  )

}

export default withRouter(RegisterForm);