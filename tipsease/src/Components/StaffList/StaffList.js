import React from "react"

function StaffList(props) {

  function routeToStaff(ev, staff) {
    ev.preventDefault();
    props.history.push(`/staff-list/${staff.name}`);
  }

  return (
    <div>
      {props.staff.map(staff => (
        <div onClick={ev => routeToStaff(ev, staff)} key={staff.id}>
          <p>{staff.name}</p>
        </div>
      ))}
    </div>
  )
}

export default StaffList