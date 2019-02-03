import React from "react";

function Home(props) {
  const routeToStaffList = ev => {
    ev.preventDefault();
    props.history.push("/staff-list");
  };

  return (
    <div>
      <button onClick={routeToStaffList}>View Staff Members!</button>
    </div>
  )
}

export default Home;