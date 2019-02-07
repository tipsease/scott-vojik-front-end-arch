import React from "react";
import styled from "styled-components"

import { withRouter } from "react-router";

const StaffContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
  margin-bottom: 60px;
`

const IndividualAvatar = styled.img`
  border-radius: 100%;
`

const StaffName = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

const TipAmount = styled.p`
  font-size: 2rem;
  color: #5CA143;
  font-weight: bold;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const TipInput = styled.input`
  padding: 10px 20px 10px;
  text-align: center;
  border-radius: 20px;
  font-size: 1.6rem;
  width: 450px;
  margin: 12px auto;
  border: 1px solid lightgray;
  color: #5CA143;
  font-weight: bold;
  height: 100px;
`

const TipButton = styled.button`
  padding: 30px 10px 30px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border-color: lightgray;
  font-weight: bold;

  &:hover {
    background-color: #5CA143
    color: white;
  }
`

function PatronProfile (props) {

  const patronUser = props.patrons.find(patron => `${patron.id}` === props.match.params.id);

  if (!patronUser) {
    return <h2>Loading data...</h2>
}

  return (

    <StaffContainer>
      <IndividualAvatar src={patronUser.photo_url} alt="avatar"/>
      <StaffName>TIPPER/PATRON: {patronUser.first_name} {patronUser.last_name}</StaffName>

      <p>Hello WORLD</p>      
    </StaffContainer>
  )

}

export default withRouter(PatronProfile);
