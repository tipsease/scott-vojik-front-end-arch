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


function staffProfile (props) {

  const staffUser = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  if (!staffUser) {
    return <h2>Loading data...</h2>
}

  return (

    <StaffContainer>
      <IndividualAvatar src={staffUser.photo_url} alt="avatar"/>
      <StaffName>STAFF MEMBER: {staffUser.first_name} {staffUser.last_name}</StaffName>
      <p>WOWWWWW LOOK AT ALL THIS MONEY I HAVE COOL</p>

      <p>Hello WORLD</p>      
    </StaffContainer>
  )

}

export default withRouter(staffProfile);
