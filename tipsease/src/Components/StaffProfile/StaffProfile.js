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
  width: auto;
  max-width: 550px;
  border-radius: 100%;
`

const StaffName = styled.p`
  font-size: 2rem;
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

const StyleNavBar = styled.div`
  height: 20px;
  width: 100%;
  justify-content: flex-start;
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
      <StyleNavBar/>
        <NavLink className="nav-link" onClick={handleLogout} to="/">Logout</NavLink>
      <StyleNavBar/>
      
      <div>
        <Logo src={require("../../tipease3.png")} alt="logo"/>
        <StaffContainer>
          
          <IndividualAvatar src={staffUser.photo_url} alt="avatar"/>
          <StaffName><strong>Employee:</strong> {staffUser.first_name} {staffUser.last_name}</StaffName>
          <StaffName><strong>Start Date:</strong> {staffUser.email}</StaffName>
          <StaffName><strong>Start Date:</strong> {staffUser.start_date}</StaffName>
          <StaffName><strong>Tagline:</strong> {staffUser.tagline}</StaffName>
          

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
