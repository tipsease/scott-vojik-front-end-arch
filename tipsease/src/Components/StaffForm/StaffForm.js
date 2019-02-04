import React from "react";
import { withRouter } from "react-router"

function StaffForm(props) {

  const handleClick = ev => {
    ev.preventDefault();
    if (props.isEditing) {
      props.editStaff();
    } else {
      props.addNewStaff();
    }
    props.history.push('/staff-list')
  }

  return (


    <div>

    <form>

      <input type="text" name="name" onChange={props.changeHandler} placeholder="Name" value={props.staff.name} />
      <input type="text" name="imgUrl" onChange={props.changeHandler} placeholder="Profile Picture" value={props.staff.imgUrl} />
      <input type="text" name="price" onChange={props.changeHandler} placeholder="Price" value={props.staff.price} />
      <input type="text" name="description" onChange={props.changeHandler} placeholder="Description" value={props.staff.description} />
      {/* <input type="text" name="name" onChange={props.changeHandler} placeholder="name" value={props.staff.name} /> */}

      <button onClick={handleClick}>Add Staff Member</button>

    </form>

    </div>
  )

}

export default withRouter(StaffForm);