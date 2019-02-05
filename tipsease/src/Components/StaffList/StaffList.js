import React from "react"
import styled from "styled-components";

function StaffList(props) {

  function routeToStaff(ev, staff) {
    ev.preventDefault();
    props.history.push(`/staff-list/${staff.id}`);
  }

 

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
    font-weight:bold;
    &:hover {
      color: #67AB4C;
      background-color: #EEF1E3
      box-shadow: 5px 5px 5px #86A38C;
    }
    border: 2px solid #86A38C;
    border-radius: 5px;
    
  `

  const ListPic = styled.img`
    border-radius: 100%;  
  `

  const NameContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    &:hover {
      background-color: #EEF1E3
    }
  `  

  const StaffName = styled.p`
    font-size: 1.5rem;
  `

  return (
    <div>
      <StaffListContainer>
      {props.staff.map(staff => (
        <StaffMember onClick={ev => routeToStaff(ev, staff)} key={staff.id}>
          <NameContainer>
            <StaffName>{staff.name}</StaffName>
          </NameContainer>
          <ListPic src={staff.imageUrl} />
        </StaffMember>
      
      ))}
      </StaffListContainer>
    </div>
  )
}

export default StaffList