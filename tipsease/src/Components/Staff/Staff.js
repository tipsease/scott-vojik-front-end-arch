import React from "react";


function Staff (props) {


  const staff = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  return (

    <div>

      <div>
        <img src={staff.imageUrl} />
        <h2>{staff.name}</h2>

        <button onClick={event => {
          props.editItem(event)
          props.history.push("/staff-form");
        }}>Edit Staff Member</button>
        
      </div>

    </div>

  )
}

export default Staff;
