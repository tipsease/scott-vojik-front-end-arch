import React from "react"
import styled from "styled-components";

function StaffList(props) {

  function routeToStaff(ev, staff) {
    ev.preventDefault();
    props.history.push(`/staff-list/${staff.id}`);
  }

  const StaffHeader = styled.p`
    font-size: 4rem;
  `

  const StaffListContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `

  const StaffMember = styled.div`
    width: 400px;
    cursor: pointer;
    margin-bottom: 68px;
  `

  const ListPic = styled.img`
    border-radius: 100%;  
  `

  const StaffName = styled.p`
    font-size: 1.5rem;
  `

  return (
    <div>
      <StaffHeader>Staff Members</StaffHeader>
      <StaffListContainer>
      {props.staff.map(staff => (
        <StaffMember onClick={ev => routeToStaff(ev, staff)} key={staff.id}>
          <StaffName>{staff.name}</StaffName>
          <ListPic src={staff.imageUrl} />
        </StaffMember>
      
      ))}
      </StaffListContainer>
    </div>
  )
}

export default StaffList