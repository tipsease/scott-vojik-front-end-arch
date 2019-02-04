import React from "react";


function Staff (props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.addNewTip();
  }

  const staffMember = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  return (

    <div>

      <div>
        <img src={staffMember.imageUrl} />
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
