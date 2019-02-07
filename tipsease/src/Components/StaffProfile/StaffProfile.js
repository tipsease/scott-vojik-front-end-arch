import React from "react";
import styled from "styled-components"

import { NavLink } from "react-router-dom"

import { withRouter } from "react-router";

const StaffContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
  margin: 60px auto;
`

const IndividualAvatar = styled.img`
  border-radius: 100%;
`

const StaffName = styled.p`
  font-size: 2rem;
  font-weight: bold;
`
const Logo = styled.img`
  height: 300px;
  width: auto;
  margin: 24px auto;
`



function staffProfile (props) {

  const handleLogout = (e) => {
    localStorage.clear();
  }

  const staffUser = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  if (!staffUser) {
    return <h2>Loading data...</h2>
}

  return (
    <div>
    <NavLink className="nav-link" onClick={handleLogout} to="/">Logout</NavLink>
    <div>
     
      <Logo src={require("../../tipease3.png")} alt="logo"/>
      <StaffContainer>
        
        <IndividualAvatar src={staffUser.photo_url} alt="avatar"/>
        <StaffName>Employee: {staffUser.first_name} {staffUser.last_name}</StaffName>
        <p>Start Date: {staffUser.start_date}</p>
        <p>Tagline: {staffUser.tagline}</p>
        <p>WOWWWWW LOOK AT ALL THIS MONEY I HAVE COOL</p>
    
      </StaffContainer>
    </div>
    </div>
  )

}

export default withRouter(staffProfile);
