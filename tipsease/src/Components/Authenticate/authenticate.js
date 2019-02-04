import React from "react"

const authenticate = HomeView => Login =>
  class extends React.Component {
    state = {
      isLoggedIn: false
    }

    componentDidMount() {
      if (localStorage.getItem('sk')) {
        this.setState({ isLoggedIn: true });
      } 
    }

    render() {
      if (this.state.isLoggedIn) return <HomeView />;
      return <Login />
    }
  }

  export default authenticate;