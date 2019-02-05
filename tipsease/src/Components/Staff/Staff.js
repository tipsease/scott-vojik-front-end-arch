import React from "react";
import styled from "styled-components"


const IndividualAvatar = styled.img`
    border-radius: 100%;
  `

const StaffName = styled.p`
  font-size: 1.5rem;
`

const TipAmount = styled.p`
  font-size: 2rem;
`



function Staff (props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.addNewTip(staffMember.id);
  }

  

  const staffMember = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  

  // <Logo src={require("./tipease3.png")} alt="logo"/>
  if (!staffMember) {
    return <h2>Loading item data...</h2>
}

  return (

    <div>

      <div>
        <IndividualAvatar src={staffMember.imageUrl} alt="avatar"/>
        <StaffName>Staff Member: {staffMember.name}</StaffName>
        <TipAmount>Tip: ${staffMember.price}</TipAmount>

        <form>
          <input type="number" name="price" placeholder="Enter Tip Amount" onChange={props.changeHandler} value={props.stateStaff.price}/>
          <button type="submit" onClick={handleSubmit}>Tip Staff</button>
        </form>
        
        
      </div>

    </div>

  )
}

export default Staff;
