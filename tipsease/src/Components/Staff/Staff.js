import React from "react";


function Staff (props) {


  const staff = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  return (

    <div>

      <div>
        <img src={staff.imageUrl} />
        <h2>{staff.name}</h2>
        
      </div>

    </div>

  )
}

export default Staff;
