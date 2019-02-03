import React from "react";


function Staff (props) {


  const staff = props.staff.find(thing => `${thing.id}` === props.match.params.id);

  return (

    <div>

      <div>
        <h1>hello dorf</h1>
        <p>{staff.name}</p>
      </div>

    </div>

  )
}

export default Staff;
