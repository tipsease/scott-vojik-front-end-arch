import React from "react";
import styled from "styled-components"


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

function Staff (props) {

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   props.addNewTip(staffMember);
  // }

  const staffMember = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  if (!staffMember) {
    return <h2>Loading data...</h2>
}

  return (

    <StaffContainer>
      <IndividualAvatar src={staffMember.photo_url} alt="avatar"/>
      <StaffName>Staff Member: {staffMember.first_name} {staffMember.last_name}</StaffName>
      <TipAmount>Tip: ${staffMember.tip_amount}</TipAmount>

      <StyledForm>
        <TipInput type="number" min="0" name="amount" placeholder="Enter Tip Amount" onChange={props.changeHandler} value={props.tipData.amount}/>
        <TipButton type="submit" onClick={(e) => props.addNewTip(e, staffMember.id)}>Tip Staff</TipButton>
      </StyledForm>
          
    </StaffContainer>
  )
}

export default Staff;
