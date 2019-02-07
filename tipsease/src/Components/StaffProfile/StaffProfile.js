import React from "react";
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { withRouter } from "react-router";
import { connect } from "react-redux";


import { getStaff } from "../../store/actions/"


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



function staffProfile (props) {

  const handleLogout = (e) => {
    localStorage.clear();
  }

  const staffUser = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  const toEdit = e => {
    props.history.push(`/staff-profile/${staffUser.id}/edit`)
  }

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

        <FormButton onClick={toEdit}>Edit Profile</FormButton>   
    
      </StaffContainer>
    </div>
    </div>
  )

}

const mapStateToProps = state => ({})

export default withRouter(connect(
  mapStateToProps,
  { getStaff }
)(staffProfile))

// export default withRouter(staffProfile);
