import React from "react";

function Home(props) {
  const routeToStaffList = ev => {
    ev.preventDefault();
    props.history.push("/staff-list");
  };

  return (
    <div>
      <p>Landing page here?</p>
    </div>
  )
}

export default Home;