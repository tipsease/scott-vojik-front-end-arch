import React from "react";


function Staff (props) {


  const staff = props.staff.find(thing => `${thing.name}` === props.match.params.name);

  return (

    <div>

      <div>
        <h1>hello world</h1>
        <p>{staff.name}</p>
      </div>

    </div>

  )
}

export default Staff;
