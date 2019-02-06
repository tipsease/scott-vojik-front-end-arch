import React from "react";

function Home(props) {
  const routeToStaffList = ev => {
    ev.preventDefault();
    props.history.push("/staff-list");
  };

  return (
    <div>
      <p>Individual Staff Profile Page</p>
    </div>
  )
}

export default Home;