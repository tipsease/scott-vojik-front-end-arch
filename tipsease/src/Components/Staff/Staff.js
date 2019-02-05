import React from "react";
import styled from "styled-components"


const individualAvatar = styled.img`
    border-radius: 100%;
  `

function Staff (props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.addNewTip(staffMember.id);
  }

  const staffMember = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  

  // <Logo src={require("./tipease3.png")} alt="logo"/>

  return (

    <div>

      <div>
        <individualAvatar src={staffMember.imageUrl} alt="avatar"/>
        <h2>{staffMember.name}</h2>
        <p>{staffMember.price}</p>

        <form>
          <input type="number" name="price" placeholder="Enter Tip Amount" onChange={props.changeHandler} value={props.stateStaff.price}/>
          <button type="submit" onClick={handleSubmit}>Tip Staff</button>
        </form>
        
        
      </div>

    </div>

  )
}

export default Staff;
