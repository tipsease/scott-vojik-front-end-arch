import React from "react";
import { NavLink } from "react-router-dom"

function Home(props) {
  const routeToStaffList = ev => {
    ev.preventDefault();
    props.history.push("/staff-list");
  };

  return (
    <div>
      <NavLink exact to="/staff-form">Add Staff Member</NavLink>
      <button onClick={routeToStaffList}>View Staff Members!</button>
    </div>
  )
}

export default Home;