import React from 'react';

import Home from "../Components/home/Home";

const HomeView = props => {
  return <Home history={props.history} />;
}

export default HomeView;